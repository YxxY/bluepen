
<template>
  <div class="container">
    <div id="clock">
      <p class="date">{{ date }}</p>
      <p class="time">{{ time }}</p>
      <p class="text">Have a Good Day</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "",
      date: ""
    };
  },
  created() {
    this.timerID = setInterval(this.updateTime, 1000);
    this.updateTime();
  },
  destroyed() {
    clearInterval(this.timerID);
  },
  methods: {
    updateTime() {
      const cd = new Date();
      const week = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      const zeroPadding = function(num, digit) {
        let zero = "";
        for (let i = 0; i < digit; i++) {
          zero += "0";
        }
        return (zero + num).slice(-digit);
      };
      this.time =
        zeroPadding(cd.getHours(), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2);
      this.date =
        zeroPadding(cd.getFullYear(), 4) +
        "-" +
        zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        zeroPadding(cd.getDate(), 2) +
        " " +
        week[cd.getDay()];
    }
  }
};
</script>
<style lang="stylus" scoped>
.container {
  width: 100%;
  background-color: black;
  #clock {
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    margin: 0 auto;
    color: #0f3854;
    text-shadow: 0 0 20px rgb(1, 54, 41), 0 0 20px rgba(230, 98, 10, 0);

    .time {
      letter-spacing: 0.05em;
      font-size: 80px;
      padding: 5px 0;
    }

    .date {
      letter-spacing: 0.1em;
      font-size: 24px;
    }

    .text {
      letter-spacing: 0.1em;
      font-size: 12px;
      padding: 20px 0 0;
    }
  }
}
</style>
