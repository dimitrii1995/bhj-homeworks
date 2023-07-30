const fontSizeList = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

for (let i = 0; i < fontSizeList.length; i++){
    fontSizeList[i].onclick = function(){
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        fontSizeList[i].classList.add('font-size_active');
        if(fontSizeList[i].classList.contains('font-size_small')){
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if (fontSizeList[i].classList.contains('font-size_big')){
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
        return false;
    };
}