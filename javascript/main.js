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
