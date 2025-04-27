const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
//hàm ẩn hiện ô mua hàng
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');
// ấn vào nút mua hàng thì hiện ô mua hàng
function showBuyTickets(){
   modal.classList.add('open');
}
// ấn vào nút đóng thì ẩn ô mua hàng
function hideBuyTickets(){
    modal.classList.remove('open');
}
// lắp qua từng thẻ và nghe hành vi click
for (const buyBtn of buyBtns) {
   buyBtn.addEventListener('click', showBuyTickets);
     
}
// nghe hành vi click vào nút đóng
modalClose.addEventListener('click',hideBuyTickets);

//click vào vùng ngoài ô mua hàng thì ẩn ô mua hàng
modal.addEventListener('click',hideBuyTickets);
modalContainer.addEventListener('click', function(event){
// ngăn chặn sự kiện click từ modalContainer truyền ra ngoài
event.stopPropagation();
});

//xây dựng responsive menu
// header
var header = document.getElementById('header');
// mobile menu
var mobileMenu = document.getElementById('mobile-menu');
// menu items
var headerHeight = header.clientHeight;
//đóng mở menu mobile
mobileMenu.onclick = function() {
   // kiểm tra xem header đóng hay mở
   var isClosed = header.clientHeight === headerHeight;
   //nếu đang đóng thì mở
   if(isClosed){
      header.style.height = 'auto';
   }
   // nếu đang mở thì đóng
   else{
      header.style.height = null;
   }
}

//Tự động đóng menu khi click vào menu item
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++){
   var menuItem = menuItems[i];

   // nếu là menu cha thì không thực hiện gì cả 
   menuItem.onclick = function(event){
      var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
      if (isParentMenu){
         event.preventDefault();
      }
     else{
         // nếu là menu con thì không thực hiện gì cả
         header.style.height = null;
      
   }
}
}
