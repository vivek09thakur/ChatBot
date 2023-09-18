function RemoveBanners(){
    const message = document.getElementById('user_message');
    const response = document.getElementById('ai_response');

    if(message==''&& response==''){
        document.getElementsByClassName('banners').style.display = 'none';
    }
    else{
        document.getElementsByClassName('banners').style.display = 'block';
    }
}