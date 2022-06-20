import { Teleport, defineComponent, h, ref } from 'vue'
import type { DefineComponent } from 'vue'
import type { MoveToContainer } from './types'

export const moveToContainer = defineComponent({
  props: {
    to: {
      type: String,
      default: 'body',
    },
    finish: {
      type: Function,
      default: () => { },
    },
  },
  setup(props, { slots }) {
    const left = ref(0)
    const top = ref(0)
    const diffX = ref(0)
    const diffY = ref(0)
    const drag = ref<HTMLElement>()
    const container = ref<HTMLElement>()
    if (typeof props.to === 'string')
      container.value = document.querySelector(props.to) as HTMLElement
    else
      container.value = props.to
    function ondrag(e: DragEvent | TouchEvent) {
      if (e instanceof DragEvent) {
        left.value = e.clientX - diffX.value
        top.value = e.clientY - diffY.value
      }
      else if (e.touches[0]?.clientX) {
        left.value = e.touches[0]?.clientX - diffX.value
        top.value = e.touches[0]?.clientY - diffY.value
      }
      if (left.value < 0)
        left.value = 0
      if (top.value < 0)
        top.value = 0
      if (left.value > container.value!.offsetWidth - drag.value!.offsetWidth)
        left.value = container.value!.offsetWidth - drag.value!.offsetWidth
      if (top.value > container.value!.offsetHeight - drag.value!.offsetHeight)
        top.value = container.value!.offsetHeight - drag.value!.offsetHeight
    }
    function ondragstart(e: DragEvent | TouchEvent) {
      e.stopPropagation()
      if (e instanceof DragEvent) {
        diffX.value = e.clientX - drag.value!.offsetLeft
        diffY.value = e.clientY - drag.value!.offsetTop
      }
      else {
        diffX.value = e.touches[0]?.clientX - drag.value!.offsetLeft
        diffY.value = e.touches[0]?.clientY - drag.value!.offsetTop
      }
    }
    function ondragend(e: DragEvent | TouchEvent) {
      ondrag(e)
      props.finish(e)
    }
    return () => h(Teleport, { to: props.to || 'body', disabled: false }, h('div', {
      draggable: true,
      style: { position: 'absolute', left: `${left.value}px`, top: `${top.value}px`, cursor: 'move' },
      ref: drag,
      ondragstart,
      ondrag,
      ondragend,
      ontouchstart: ondragstart,
      ontouchmove: ondrag,
      ontouchend: ondragend,
    }, slots.default?.()))
  },
}) as DefineComponent<MoveToContainer>
