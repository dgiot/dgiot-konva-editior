// 编辑器自定义事件
const events = {
  redirect(url) {
    if (url) {
      window.location.href = url;
    }
  },

  alert(msg) {
    if (msg) {
      alert(msg);
    }
  },
  mousemove(msg) {
    if (msg) {
      alert.log(msg);
    }
  },
};

const mixins = {
  methods: events,
};

const eventList = [
  {
    key: 'redirect',
    label: '跳转事件',
    event: events.redirect,
    param: '',
  },
  {
    key: 'alert',
    label: 'alert 事件',
    event: events.alert,
    param: '',
  },
  {
    key: 'mousemove',
    label: 'mousemove 事件',
    event: events.mousemove,
    param: '',
  },
];

export { mixins, events, eventList };
