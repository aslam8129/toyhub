    import express from "express"
    import isAdmin from "../middlewares/adminMIddleware.js"
    import * as adminController from "../controllers/adminController.js"
    import upload from "../utils/multer.js"

    const router = express.Router()

    //!---------------------------------------/!/
    //todo: Define authentication routes here/!/
    //!-------------------------------------/!/    

    //router for rendering homepage
    router.get("/", isAdmin.isAdmin, adminController.getHome)
    router.get("/login", adminController.getLogin)
    router.post("/login", adminController.postLogin)
    router.post("/logout", adminController.postLogout)

    //!--------------------------------/!/
    //todo: define product routes here/!/
    //!------------------------------/!/

    //router for renderig addProduct page
    router.get("/addProduct", isAdmin.isAdmin, adminController.getAddProduct)
    router.post("/addProduct", isAdmin.handleUpload,  adminController.postAddProduct)
    router.get("/products", adminController.getProductList)
    router.get('/editProduct/:id', adminController.getEditProduct);
    router.post('/editProduct/:id', adminController.postEditProduct);
    router.post('/blockProduct/:id', adminController.postBlockProduct);
      


    //!---------------------------------/!/
    //todo: define Category routes here/!/
    //!-------------------------------/!/

    router.get('/category',isAdmin.isAdmin,  adminController.getAddCategory)
    router.post('/category', isAdmin.isAdmin, upload.single('image'), adminController.postAddCategory)
    router.get('/category/edit/:id', isAdmin.isAdmin, adminController.getEditCategory);
    router.post('/category/edit/:id', isAdmin.isAdmin, upload.single('image'), adminController.postEditCategory);
    router.post('/category/delete/:id', isAdmin.isAdmin, adminController.postDeleteCategory);

    //!---------------------------s-------/!/
    //todo: define user list routes here/!/
    //!--------------------------------/!/
    
    //router for retrieve all users
    router.get("/users", isAdmin.isAdmin, adminController.getUserlist)
    router.post('/blockUser/:id', isAdmin.isAdmin, adminController.postBlock)

    //!-----------------------------------/!/
    //todo: define order list routes here/!/
    //!---------------------------------/!/


    router.get('/orders', adminController.getAdminOrders);
    router.get('/orders/view/:orderId', adminController.getAdminOrderDetails);
    router.post('/orders/updateStatus/:id', adminController.postUpdateOrderStatus);


    //!------------------------------------/!/
    //todo: define coupon list routes here/!/
    //!---------------------------------/!/
    
    router.get('/coupons', adminController.getCoupon);
    router.get('/addCoupon', adminController.getAddCoupon);
    router.post('/addCoupon', adminController.postAddCoupon);
    router.get('/editCoupon/:id', adminController.getEditCoupon);
    router.post('/editCoupon/:id', adminController.postEditCoupon);
    router.post('/deleteCoupon/:id', adminController.postDeleteCoupon);
    router.post('/blockCoupon/:id', adminController.postBlockCoupon);
    
    //!------------------------------------/!/
    //todo: define  offer  routes here   /!/
    //!---------------------------------/!/


    router.get('/offers' , adminController.getOffers)
    router.get('/addOffer' , adminController.getAddOffer)
    router.post('/addOffer' , adminController.postAddOffer)
    router.get('/editOffer/:id' , adminController.getEditOffer)
    router.post('/editOffer/:id' , adminController.postEditOffer)
    router.post('/blockOffer/:id' , adminController.postBlockOffer)
    router.post('/deleteOffer/:id' , adminController.deleteOffer)


    

    export default router



    //^duehuiwehuif
    //todo: define order routes here/!/
    //!-------------------------------/!/
    //?router for retrieve all orders
    //*pode
    //&poda pdiodaada
    //~vedhjvgej
    //todo