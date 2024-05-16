const router = require('koa-router')();

router.prefix('/vue3');

router.get('/swapper', function (ctx, next) {
  ctx.body = [
    'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
    'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
    'https://p9-dcd-sign.byteimg.com/tos-cn-i-6w9my0ksvp/77bc6cc084604ce599a817847306a293~noop.webp?lk3s=125a4689&x-expires=1717931696&x-signature=nW33ivyimJBr%2BwKwCy2AlA1p9C4%3D',
  ];
});

router.get('/text', function (ctx, next) {
  ctx.body = [
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
    '拆解BBAL：车架生锈、强度不如哈弗豪华品牌还能买吗还能买吗',
  ];
});

module.exports = router;
