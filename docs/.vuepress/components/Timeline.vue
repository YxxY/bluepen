<template>
  <div class="block">
    <div style="padding: 0 0 10px 0;">
      <el-button round @click="reverse">{{ text }}</el-button>
    </div>
    <el-timeline>
      <el-timeline-item
        v-for="(item,index) of data"
        :key="index"
        :timestamp="item.timestamp"
        placement="top"
      >
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Reverse"
    },
    timeline: {
      type: Array,
      default: function() {
        return [
          {
            timestamp: "2015.08",
            title: "毕业",
            content:
              "毕业来到深圳，没想到一待就到现在......"
          },
          {
            timestamp: "2019.08",
            title: "工作",
            content:
              "在深圳工作了四年整，辗转三家公司，为三斗米折腰。"
          },
          {
            timestamp: "2019.10",
            title: "未来",
            content:
              '敢为路在何方，预备，唱: "路在脚下！"'
          },
          {
            timestamp: "2022.04",
            title: "回家",
            content:
              "离开深圳了，没想到新冠能持续这么久，俺也决定回家躺平，给我三十岁前的人生划上句号。"
          }
        ];
      }
    }
  },
  data() {
    return {
      desc_order: true,
      data: []
    };
  },
  computed: {
    reverse_timeline() {
      return this.timeline.slice().reverse();
    }
  },
  mounted() {
    this.data = this.timeline;
  },
  methods: {
    reverse() {
      this.desc_order = !this.desc_order;
      if (this.desc_order) {
        this.data = this.timeline;
      } else {
        this.data = this.reverse_timeline;
      }
    }
  }
};
</script>
