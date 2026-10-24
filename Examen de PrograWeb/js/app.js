document.addEventListener('DOMContentLoaded',() => {
    console.log('ingreso al sistema');
    const tipomueble = document.getElementById('calc-cant-b');
    const cantidadmuebles = document.getElementById('calc-mueble');
    const tipoflete = document.getElementById('calc-flete-b');
    const btncalcular = document.getElementById('calc-calculat-b');
    const txtresultdao = document.getElementById('resultado-b');
    console.log(parseFloat(tipomueble.value));
    
    function calcularpresupuesto(){
        console.log('ingreso a la funcion');
        
        const precio = parseFloat(tipomueble.value);
        const cantidad = parseInt(cantidadmuebles.value);
        const flete = parseFloat(tipoflete.value);
        
        if(isNaN(cantidad) || cantidad <=0){
            txtresultdao.innerHTML = '<div> Error ingrese una cantidad mayor a 0 </div>';
            return ;
        }
        
        const subtotal =precio* cantidad;
        
        let descuento = 0;
        if(cantidad >= 10){
            descuento = subtotal * 0.12;

        }
        const totalapagar =(subtotal-descuento)+flete;
        console.log('Valor: ',{
            totalapagar:totalapagar
        });
        txtresultdao.innerHTML = '<div><div><span>Total a pagar $(total a pagar) </span></div></div>';
    }
     if(btncalcular){
            btncalcular.addEventListener('click', calcularpresupuesto);
        }


})