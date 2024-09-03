# Busca Rápida

Através do estabelecimento de um padrão sobre os elementos, esta função possibilita a filtragem de conteúdo dos elementos filhos utilizando de parametros enviados tanto da chamada da função quanto do elemento que a dispara.

-------------------------------------------------------------------------------
## Conteúdo

1. [A Função](#a-função)
2. [Elemento de Disparo](#elemento-de-disparo)
3. [Elemento de Busca](#elemento-de-busca)

-------------------------------------------------------------------------------
## A Função

#### Parametros

* **Elemento** [Elemento](#elemento-de-disparo) que contém o valor de busca e também o atributo que referencia ao [elemento procurado](#elemento-de-busca).
* **Filho** Determina a classe de elemento que será filtrada no corpo de busca.

```javascript
//jQuery
function buscaRapida(e,f) {
    var busca = $(e).val().toLowerCase(); // PADRONIZAÇÃO DO FORMATO PARA MELHOR IDENTIFICAÇÃO
    var corpo = '#'+$(e).attr('data-corpo'); // DETERMINA AONDE SERÁ REALIZADA A FILTRAGEM
    if ($(corpo).html().trim().length != 0){ // VERIFICA SE HÁ CONTEÚDO REAL
        $(corpo+" "+f).each(function(){ // PERCORRE OS FILHOS PRESENTES NO CORPO
            var text = $(this).text().toLowerCase().trim(); // PADRONIZA O FORMATO PARA MELHOR IDENTIFICAÇÃO (PROCURA EM TODOS OS ELEMENTOS DO FILHO SEM DISTINÇÃO)
            (text.indexOf(busca) >= 0) ? $(this).show() : $(this).hide(); // ESCONDE O FILHO CASO NÃO HAJA CORRESPONDENCIA COM A BUSCA EM NENHUM MOMENTO
        }); 
    }
}
```
-------------------------------------------------------------------------------
## Elemento de Disparo

### Atributos

* **Placeholder** O valor nele inserido serve para melhor identificação da função do elemento.
* **Data-corpo** Este valor é o `ID` do nosso [elemento procurado](#elemento-de-busca).
* **Onkeyup** A execução função é definida para acontecer após uma tecla ser apertada, assim atualizando o valor de forma dinamica.

Exemplo:
```html
<input type="text" placeholder="Busca Rapida" data-corpo="seqLetras" onkeyup="buscaRapida($(this),'tr')">
```
-------------------------------------------------------------------------------
## Elemento de Busca

### Atributos

* **Id** O ID do elemento que contém o conteudo a ser filtrado deve ser exatamente igual ao atributo data-corpo do [elemento de disparo](#elemento-de-disparo).

Exemplo:
```html
<table>
    <tbody id="seqLetras">
        <tr>
            <td>AAABBBCCC</td>
        </tr>
        <tr>
            <td>AAACCCBBB</td>
        </tr>
        <tr>
            <td>CCCBBBAAA</td>
        </tr>
        <tr>
            <td>CCCAAABBB</td>
        </tr>
    </tbody>
</table>
```
