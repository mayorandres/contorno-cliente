/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con 
*             el producto del numero de fila por el número de columna
*
*
*   Entrada : números enteros: nfilas, ncols
*
*
*   Salida  : tabla html con nfilas y ncols
*
*
***************************************************************************************************************/
let nfila;
let ncol;
do {
    nfila = leerEntero(1);
    ncol =  leerEntero(2);

} while(nfila<0 || ncol < 0);

document.wr