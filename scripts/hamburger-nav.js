//DECLARANDO OBJETOS
const obj_btn_hamburguer = document.querySelector('.btn-hamb')
const obj_ul_nav_links = document.querySelector('#ul-nav-links')
const obj_btn_hamb = document.querySelector('.btn-hamb')
const obj_btn_venda_nav = document.querySelector('#btn-venda-nav')
const obj_btn_aluga_nav = document.querySelector('#btn-aluga-nav') 
const obj_oportunidades = document.querySelector('#btn-oportunidades-nav')
const obj_financiamento = document.querySelector('#btn-financiamento-nav') 
const obj_sobre = document.querySelector('#btn-sobre-nav') 
const obj_contatos = document.querySelector('#btn-contatos-nav') 
const obj_corretor = document.querySelector('#btn-corretor-nav')

//DECLARANDO EVENTOS
obj_btn_hamburguer.addEventListener('click', funClickHamburguer)
obj_btn_venda_nav.addEventListener('click', funClickHamburguer)
obj_btn_aluga_nav.addEventListener('click', funClickHamburguer)
obj_oportunidades.addEventListener('click', funClickHamburguer)
obj_financiamento.addEventListener('click', funClickHamburguer)
obj_sobre.addEventListener('click', funClickHamburguer)
obj_contatos.addEventListener('click', funClickHamburguer)
obj_corretor.addEventListener('click', funClickHamburguer)

//DECLARANDO FUNCOES
function funClickHamburguer() {
    obj_ul_nav_links.classList.toggle('active')
    obj_btn_hamb.classList.toggle('active')
}