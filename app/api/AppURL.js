import AppStorage from "../helpers/AppStorage";

class AppURL {

    static ApiBaseURL = "http://127.0.0.1:8000/api/";
    static ServerBaseURL = "http://127.0.0.1:8000";

    static visitorDetails = this.ApiBaseURL+'getVisitorDetails';
    static postContactDetails = this.ApiBaseURL+'postContactDetails';
    static getSiteInfo = this.ApiBaseURL+'getSiteInfo';
    static getAllCategories = this.ApiBaseURL+'getAllCategories';
    static getProductByRemark = this.ApiBaseURL+'getProductByRemark';
    static getCategoryAndProductByCategory(category_slug) {
        return this.ApiBaseURL+'getCategoryAndProductByCategory/'+category_slug;
    }
    static getFeaturedCategory = this.ApiBaseURL+'getFeaturedCategory';
    static productSearch = this.ApiBaseURL+'productSearch';
    static getProductDetails (slug) {
        return this.ApiBaseURL+'getProductDetails/'+slug;
    }
    static getNotifications = this.ApiBaseURL+'getNotifications';
    static register = this.ApiBaseURL+'auth/register';
    static login = this.ApiBaseURL+'auth/login';
    static logoutUser = this.ApiBaseURL+'auth/logout';
    static addToCart = this.ApiBaseURL+'addToCart';
    static getCart = this.ApiBaseURL+'getCart';
    static updateCartProductQuantity(cartId, type) {
      return this.ApiBaseURL+'updateCartProductQuantity/'+cartId+'/'+type;
    }
    static cartProductDelete(cartId) {
      return this.ApiBaseURL+'cartProductDelete/'+cartId;
    }
    static placeOrder = this.ApiBaseURL+'placeOrder';
    static getMyOrder = this.ApiBaseURL+'getMyOrder';
    static getOrderById(orderId) {
        return this.ApiBaseURL+'getOrderById/'+orderId;
    }
    static socialLogin = this.ApiBaseURL+'auth/social/login';
    static updateProfile = this.ApiBaseURL+'updateProfile';
    static addFavourite(productId) {
        return this.ApiBaseURL+'addFavourite/'+productId;
    }
    static getFavouriteList = this.ApiBaseURL+'favorite/list';
}

export default AppURL;
