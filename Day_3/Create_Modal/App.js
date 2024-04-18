
var modal = document.querySelector('.modal')
var openModalBtn = document.querySelector('.open-modal-btn')
var iconCloseModal = document.querySelector('.modal__header i')
var buttonCloseModal = document.querySelector('.modal__footer button')

function toggleModal(e) {
	modal.classList.toggle('hide')
}

openModalBtn.addEventListener('click', toggleModal)
iconCloseModal.addEventListener('click', toggleModal)
buttonCloseModal.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) => {
	if (e.target == e.currentTarget) toggleModal()
})
