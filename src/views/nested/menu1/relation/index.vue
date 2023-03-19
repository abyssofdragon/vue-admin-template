<template>
  <div style="padding:16px;">
    <h2>角色关系网</h2>
    <div id="box">
      <div id="cy">
        <div
          v-show="showTips"
          id="tipsWrapper"
          :style="{ left: tipContainerX, top: tipContainerY }"
          @mouseover="hoverTips"
          @mouseout="mouseoutTips"
        >
          <h1>{{ currentHoverData.label }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cytoscape from 'cytoscape'
import cydagre from 'cytoscape-dagre'
import popper from 'cytoscape-popper'
import dagre from 'dagre'
// vue使用sticky需要单独引入！！！！
import tippy, { sticky } from 'tippy.js'
cytoscape.use(popper)
cydagre(cytoscape, dagre)
let cy
export default {
  name: 'Cytoscape',
  components: {},
  data() {
    return {
      tipContainerX: 0,
      tipContainerY: 0,
      nodes: [
        {
          data: {
            id: '1',
            label: '孙飘扬',
            class: 'first-node',
            type: 'person'
          }
        },
        {
          data: {
            id: '2',
            label: '无锡宏大投资有限公司',
            class: 'normal-company'
          }
        },
        {
          data: {
            id: '3',
            label: '无锡海润医药科技有限公司',
            class: 'normal-company'
          }
        },
        {
          data: {
            id: '4',
            label: '西藏天承投资管理有限公司',
            class: 'normal-company'
          }
        },
        {
          data: {
            id: '5',
            label: '钟慧娟',
            class: 'first-node',
            type: 'company'
          }
        },
        {
          data: {
            id: '6',
            label: '江苏恒瑞医药集团有限公司',
            class: 'last-node'
          }
        }
      ],
      edges: [
        { data: { source: '5', target: '4', label: '100%' }},
        { data: { source: '1', target: '2', label: '25.43%' }},
        { data: { source: '1', target: '3', label: '10%' }},
        { data: { source: '1', target: '6', label: '89.22%' }},
        { data: { source: '2', target: '6', label: '10.78%' }},
        { data: { source: '4', target: '3', label: '90%' }},
        { data: { source: '3', target: '2', label: '74.57%' }}
      ],
      cy: {},
      firstNodeBg: '#fd485d',
      lastNodeBg: '#128bed',
      currentHoverData: {},
      showTips: false,
      tippyArr: []
    }
  },
  mounted() {
    // 创建图
    this.createCytoscape()
    // 将第一个节点水平排列在同一行上,并为第一个节点添加说明
    this.arrangeFirstNodeAndAddTips()
    this.addTapEventListener()
    this.addMouseOverOutEvent()
    this.addDragEventListenter()
    this.addZoomEventListener()
  },
  beforeDestroy() {
    this.tippyArr.map((item) => {
      item.destroy()
    })
  },
  methods: {
    createCytoscape() {
      cy = cytoscape({
        container: document.getElementById('cy'), // 设置容器
        // boxSelectionEnabled: false,
        autounselectify: true,
        layout: {
          name: 'dagre'
        },
        zoom: 0.6,
        minZoom: 0.3,
        maxZoom: 2,
        fit: true,
        boxSelectionEnabled: false,
        style: [
          {
            selector: 'node',
            style: {
              content: 'data(label)',
              shape: 'rectangle',
              width: 120,
              padding: 5,
              color: '#000',
              // boxSelectionEnabled: false,
              'overlay-opacity': 0, // 取消默认的元素选择时的阴影
              'text-max-width': 120,
              'text-wrap': 'wrap',
              'text-overflow-wrap': 'anywhere',
              'line-height': 1.5,
              'text-valign': 'center',
              'text-halign': 'center',
              'background-color': '#fff',
              'border-width': 0.5,
              'border-color': this.lastNodeBg,
              'font-size': 12,
              'font-weight': 'lighter'
              // "min-zoomed-font-size": 12,
            }
          },
          {
            selector: 'edge',
            style: {
              width: 1,
              label: 'data(label)',
              color: this.lastNodeBg,
              'target-arrow-shape': 'triangle',
              'line-color': '#ccc',
              'target-arrow-color': this.lastNodeBg,
              'arrow-scale': 0.7,
              'curve-style': 'bezier',
              'font-size': 12,
              'font-weight': 'lighter',
              'text-background-color': '#fff',
              'text-overflow-wrap': 'anywhere',
              'text-background-opacity': 1,
              'overlay-opacity': 0
            }
          },
          {
            selector: "node[class='first-node']",
            style: {
              shape: 'ellipse',
              color: 'white',
              width: 30,
              height: 30,
              padding: 8,
              'text-opacity': 1,
              'border-width': 0,
              'background-color': this.firstNodeBg
            }
          },
          {
            selector: "node[class='last-node']",
            style: {
              color: 'white',
              'background-color': this.lastNodeBg
            }
          }
        ],
        elements: {
          nodes: this.nodes,
          edges: this.edges
        }
      })
    },
    getColor(firstNodeType) {
      return firstNodeType === 'person' ? this.firstNodeBg : this.lastNodeBg
    },
    addTips(ele, dataObj) {
      const tippyA = this.makeTippy(ele, dataObj)
      tippyA.show()
    },
    arrangeFirstNodeAndAddTips() {
      const firstNodePositionArr = []
      // 获取第一个节点的y坐标
      cy.elements().map((item, index, el) => {
        if (item.data().class === 'first-node') {
          firstNodePositionArr.push(cy.$(`#${item.id()}`).position('y'))
          this.addTips(item, item.data())
        }
      })
      // 获取最小的y坐标
      const minY = Math.min(...firstNodePositionArr)
      // 将所有第一个节点的y坐标与最小的y坐标对齐
      cy.elements().map((item, index, el) => {
        if (item.data().class === 'first-node') {
          cy.$(`#${item.id()}`).position('y', minY)
        }
      })
    },
    makeTippy(ele, dataObj) {
      const ref = ele.popperRef()
      const dummyDomEle = document.createElement('div')
      const tip = new tippy(dummyDomEle, {
        getReferenceClientRect: ref.getBoundingClientRect,
        arrow: true,
        allowHTML: true,
        trigger: 'manual', // mandatory
        content: this.createDescriptionTip(dataObj),
        placement: 'top',
        hideOnClick: false,
        sticky: 'reference',
        plugins: [sticky], // 必须添加
        interactive: true,
        // interactive: true,
        appendTo: document.body
      })
      this.tippyArr.push(tip)
      return tip
    },
    clickNode(e) {
      const node = e.target
      this.setTipContainersOpacity(0.2)
      // 获取与点击节点相关的元素（包括节点和连线）
      const relativeEle = cy.$(`#${node.id()}`).successors()
      relativeEle.map((item, index, el) => {
        el.style('opacity', '1')
      })

      const allEle = cy.elements()
      // 获取除点击节点相关的元素（包括节点和连线）以外的节点和边,
      // 会包括点击元素本身,将其透明度降低
      const leftEle = allEle.difference(relativeEle)
      leftEle.map((item, index, el) => {
        el.style('opacity', 0.2)
      })
      // 当前点击的是第一个节点，则将第一个节点的提示描述显示出来
      if (e.target.data().class === 'first-node') {
        const tipContainer = document.getElementById(
          `tipsContainer${e.target.id()}`
        )
        tipContainer.style.opacity = 1
      }
      // 将被点击的元素透明度置为1
      node.style('opacity', 1)
    },
    createDescriptionTip(dataObj) {
      const color = this.getColor(dataObj.type)
      // 绘制文本
      const tipContainer = document.createElement('div')
      tipContainer.classList.add('first-node-description-container')
      tipContainer.innerHTML = dataObj.label
      tipContainer.style.background = color
      tipContainer.setAttribute('id', `tipsContainer${dataObj.id}`)
      // 绘制提示小箭头
      const arrowDiv = document.createElement('div')
      arrowDiv.classList.add('first-node-description-arrow')
      arrowDiv.style.borderColor = `${color} transparent transparent transparent`
      tipContainer.appendChild(arrowDiv)

      return tipContainer
    },
    addTapEventListener() {
      cy.on('tap', (e) => {
        // 点击节点以外的地方，则恢复所有图的展示
        if (e.target.data().class === 'last-node') return
        if (e.target === cy || e.target.isEdge()) {
          cy.elements().map((item, index, el) => {
            el.style('opacity', 1)
          })
          this.setTipContainersOpacity(1)
        } else {
          this.clickNode(e)
        }
      })
    },
    addMouseOverOutEvent() {
      cy.on('mouseover', 'node', (e) => {
        this.showTips = true
        this.currentHoverData = e.target.data()
        this.$nextTick(() => {
          this.moveTipsContainer(e)
        })
      })
      cy.on('mouseout', 'node', (e) => {
        this.showTips = false
      })
    },
    addDragEventListenter() {
      cy.on('drag', 'node', (e) => {
        this.moveTipsContainer(e)
      })
    },
    addZoomEventListener() {
      cy.on('zoom', (e) => { })
    },
    // 设置提示的位置
    moveTipsContainer(e) {
      this.tipContainerX =
        e.target.renderedPosition().x - e.target.width() / 2 + 'px'
      this.tipContainerY =
        e.target.renderedPosition().y + e.target.height() - 10 + 'px'
    },
    setTipContainersOpacity(opacity) {
      const tipsContainerList = document.getElementsByClassName(
        'first-node-description-container'
      )
      for (let i = 0; i < tipsContainerList.length; i++) {
        tipsContainerList[i].style.opacity = opacity
      }
    },
    hoverTips() {
      this.showTips = true
    },
    mouseoutTips() {
      this.showTips = false
    }
  }
}
</script>

<style>
#box {
  width: 100%;
  height: 600px;
  position: relative;
}

#cy {
  width: 90%;
  height: 100%;
  position: absolute;
  top: 100px;
  z-index: 999;
}

#tipsWrapper {
  box-shadow: 0px 0px 4px #ccc;
  width: 300px;
  padding: 10px 0px;
  position: absolute;
  background: #fff;
  z-index: 3;
}

.__________cytoscape_container {
  position: relative !important;
}

canvas {
  left: 0 !important;
}

h1 {
  font-size: 1em;
  font-weight: normal;
}

/* makes sticky faster; disable if you want animated tippies */
.tippy-popper {
  transition: none !important;
}

.first-node-description-container {
  color: #fff;
  padding: 5px 5px;
  position: relative;
  margin-bottom: 5px;
}

.first-node-description-arrow {
  position: absolute;
  border: 5px solid #fff;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
