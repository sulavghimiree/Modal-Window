const modal_overlay = document.querySelector('.modal-wrapper');
const blur_overlay = document.querySelector('.main');
const closeButton = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');
console.log(showModal)

for(let i=0; i<showModal.length; i++)
{
    showModal[i].addEventListener('click', function()
    {
        modal_overlay.classList.remove('hidden');
        blur_overlay.classList.add('div');
        
    })
}

closeButton.addEventListener('click', function()
{
    modal_overlay.classList.add('hidden');
    blur_overlay.classList.remove('div');
})

document.addEventListener('keydown', function(e)
{
    if(e.key === 'Escape')
    {
        if(!modal_overlay.classList.contains('hidden'))
        {
            modal_overlay.classList.add('hidden');
            blur_overlay.classList.add('div');
        }
    }
})