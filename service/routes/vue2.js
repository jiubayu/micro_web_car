const router = require('koa-router')();

router.prefix('/vue2');

router.get('/new/list', function (ctx, next) {
  ctx.body = [
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      title:
        '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true,
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      title:
        '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true,
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      title:
        '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true,
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      title:
        '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true,
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      title:
        '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true,
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      title:
        '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true,
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true,
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true,
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true,
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      title: '爱在大草原 吉利豪越的设计师一定是个暖男',
      number: '3026',
      type: '导购',
      status: true,
    },
  ];
});
router.get('/rank/list', function (ctx, next) {
  ctx.body = [
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
  ];
});
router.get('/car/list', function (ctx, next) {
  ctx.body = [
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      name: '沃尔沃',
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      name: '沃尔沃',
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      name: '沃尔沃',
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      name: '沃尔沃',
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      name: '沃尔沃',
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      name: '沃尔沃',
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      name: '沃尔沃',
    },
    {
      img: 'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
      name: '沃尔沃',
    },
  ];
});

module.exports = router;
