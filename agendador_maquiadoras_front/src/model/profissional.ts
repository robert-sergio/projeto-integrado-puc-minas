export default interface Profissional {
    id : number
    nome : string 
    email : string
    foto : string 
    profissao : string
    especialidades : [string] 
    endereco : string 
    telefone : string
    whatsapp : string
    instagram : string
    facebook : string
    estrelas : number
    qtd_atds : number
    dt_cadastro : Date
}