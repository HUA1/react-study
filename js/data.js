var userInfo = {
    name:'一步小僧',
    level:'🌟🌟🌟🌟🌟'
}
var arr = [
  'asd','asdsad','asdsad'
]
var menuObj = {
    "user": {
      "key": "user",
      "title": "用户管理",
      "icon": "../../../res/img/menu/user.png",
      "app": "user",
      "model": "reviewList",
      "template": "commonList",
      "list": {
        "reviewList": {
          "key": "reviewList",
          "title": "实名认证",
          "icon": "",
          "app": "user",
          "model": "reviewList",
          "template": "commonList"
        },
        "niurenReviewList": {
          "key": "niurenReviewList",
          "title": "牛人审核",
          "icon": "",
          "app": "user",
          "model": "niurenReviewList",
          "template": "commonList"
        },
        "expertReviewList": {
          "key": "expertReviewList",
          "title": "专家审核",
          "icon": "",
          "app": "user",
          "model": "expertReviewList",
          "template": "commonList"
        }
      }
    },
    "project": {
      "key": "project",
      "title": "项目",
      "icon": "../../../res/img/menu/project.png",
      "app": "project",
      "model": "projectReviewList",
      "template": "commonList",
      "list": {
        "porjectReviewList": {
          "key": "projectReviewList",
          "title": "未审核项目",
          "icon": "",
          "app": "project",
          "model": "projectReviewList",
          "template": "commonList"
        }
      }
    },
    "service": {
      "key": "service",
      "title": "话题",
      "icon": "../../../res/img/menu/service.png",
      "app": "service",
      "model": "topicReviewList",
      "template": "commonList",
      "list": {
        "topicReviewList": {
          "key": "topicReviewList",
          "title": "未审核话题",
          "icon": "",
          "app": "service",
          "model": "topicReviewList",
          "template": "commonList"
        }
      }
    },
    "invest": {
      "key": "invest",
      "title": "投资人",
      "icon": "../../../res/img/menu/invest.png",
      "app": "invest",
      "model": "investReviewList",
      "template": "commonList",
      "list": {
        "investReviewList": {
          "key": "investReviewList",
          "title": "未审核投资人",
          "icon": "",
          "app": "invest",
          "model": "investReviewList",
          "template": "commonList"
        }
      }
    },
    "order": {
      "key": "order",
      "title": "订单",
      "icon": "../../../res/img/menu/order.png",
      "app": "order",
      "model": "serviceOrderHandleNoList",
      "template": "commonList",
      "list": {
        "serviceOrderIngList": {
          "key": "serviceOrderIngList",
          "title": "服务中列表",
          "icon": "",
          "app": "order",
          "model": "serviceOrderIngList",
          "template": "commonList"
        },
        "serviceOrderEndList": {
          "key": "serviceOrderEndList",
          "title": "确认中列表",
          "icon": "",
          "app": "order",
          "model": "serviceOrderEndList",
          "template": "commonList"
        },
        "serviceOrderSuccessList": {
          "key": "serviceOrderSuccessList",
          "title": "已完成列表",
          "icon": "",
          "app": "order",
          "model": "serviceOrderSuccessList",
          "template": "commonList"
        },
        "topicComplainList": {
          "key": "topicComplainList",
          "title": "话题投诉",
          "icon": "",
          "app": "order",
          "model": "topicComplainList",
          "template": "commonList"
        }
      }
    },
    "finance": {
      "key": "finance",
      "title": "财务",
      "icon": "../../../res/img/menu/finance.png",
      "app": "finance",
      "model": "cashList",
      "template": "commonList",
      "list": {
        "cashList": {
          "key": "cashList",
          "title": "等待提现",
          "icon": "",
          "app": "finance",
          "model": "cashList",
          "template": "commonList"
        },
        "successCash": {
          "key": "successCash",
          "title": "提现成功",
          "icon": "",
          "app": "finance",
          "model": "successCashList",
          "template": "commonList"
        },
        "failCash": {
          "key": "failCash",
          "title": "等待失败",
          "icon": "",
          "app": "finance",
          "model": "failCashList",
          "template": "commonList"
        }
      }
    }
}

const listA = [
    {'name':'一步小僧','job':'web前端开发','level':'🌟🌟🌟🌟🌟'},
    {'name':'关','job':'总','level':'🌟*100'}
]

const listB = [
    {'name':'习大大','job':'主席','level':'🌟*+∞'},
    {'name':'关','job':'总','level':'🌟*5'}
]