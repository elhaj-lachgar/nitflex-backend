const UserModule = require("../module/UserModule");
const asynchandler = require("express-async-handler");
const Errors = require("../utils/Errors");

exports.AddToListService = asynchandler(async (req, res, next) => {
  let user = await UserModule.findOne({ userId: req.body.userId });

  if (!user) {
    user = await UserModule.create(req.body);
  }

  const index = user.videos.findIndex((video) => {
    return video.videoId == req.body.video;
  });



  if (index > -1 ) return res.status(201).json({data:user});

  user.videos.push({ videoId: req.body.video , imageUrl:req.body.imageUrl , title : req.body.title });

  await user.save();

  return res.status(202).json({ data: user });
});

exports.DeleteFromListService = asynchandler(async (req, res, next) => {
  const user = await UserModule.findOne({ userId: req.body.userId });

  if (!user) return next(new Errors("user not found", 404));

  const index = user.videos.findIndex((video) => {
    return video.videoId == req.params.id;
  });

  if (index <= -1) return next(new Errors("video not found", 404));

  user.videos.splice(index, 1);

  await user.save();

  return res.status(203).json({ data: user });
});

exports.LikedService = asynchandler(async (req, res, next) => {
  const user = await UserModule.findOne({ userId: req.body.userId });

  if (!user) return next(new Errors("user not found", 404));

  const index = user.videos.findIndex((video) => {
    return video.videoId.toString() == req.params.id;
  });

  if (index <= -1) return next(new Errors("video not found", 404));

  user.videos[index].isLiked = !user.videos[index].isLiked ;

  await user.save();

  return res.status(203).json({ data: user });
});

exports.GetFavorite = asynchandler(async (req, res, next) => {
  const user = await UserModule.findOne({ userId: req.params.userId });

  if (!user) return next(new Errors("user not found", 404));

  const data = user.videos.filter((video) => {
    return video.isLiked == true;
  });


  return res.status(203).json({ data });
});

exports.GetList = asynchandler ( async ( req , res , next ) => {
    const user = await UserModule.findOne({userId:req.params.userId});
    if (!user) return next ( new Errors('user not found' , 404));
    
    return res.status(202).json({ data : user });
})
