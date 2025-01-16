function generarCertificado() {
    const cc = document.getElementById('cc').value;
    const director = document.getElementById('director').value;
    const titulo = document.getElementById('titulo').value;
    const cargo = document.getElementById('cargo').value;
    const tipo = document.getElementById('tipo').value;
    const oc = document.getElementById('oc').value;
    const fechaOC = document.getElementById('fechaOC').value;
    const factura = document.getElementById('factura').value;
    const fechaFact = document.getElementById('fechaFact').value;
    const proveedor = document.getElementById('proveedor').value;
    const detalle = document.getElementById('detalle').value;
    const rut = document.getElementById('rut').value;
    const monto = document.getElementById('numero').value;
    const montopalabras = document.getElementById('texto').value;
    const fechaEmision = document.getElementById('fechaEmision').value;

    
        document.getElementById('certCC').innerText = cc;
        document.getElementById('certCC2').innerText = cc;
        document.getElementById('certCC3').innerText = cc;
        document.getElementById('certCC4').innerText = cc;
        document.getElementById('certDirector').innerText = director;
        document.getElementById('certDirector2').innerText = director;
        document.getElementById('certTitulo').innerText = titulo;
        document.getElementById('certCargo').innerText = cargo;
        document.getElementById('certCargo2').innerText = cargo;
        document.getElementById('certTipo').innerText = tipo;
        document.getElementById('certOC').innerText = oc;
        document.getElementById('certFechaOC').innerText = fechaOC;
        document.getElementById('certFactura').innerText = factura;
        document.getElementById('certFechaFact').innerText = fechaFact;
        document.getElementById('certProveedor').innerText = proveedor;
        document.getElementById('certDetalle').innerText = detalle;
        document.getElementById('certRut').innerText = rut;
        document.getElementById('certMonto').innerText = monto;
        document.getElementById('certMontopalabras').innerText = montopalabras;
        document.getElementById('certFechaEmision').innerText = fechaEmision;

        document.getElementById('certificado').style.display = 'block';

}

function imprimirCertificado() {
    const printContent = document.getElementById('certificado').innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    location.reload();
}

document.getElementById('ocultar').addEventListener('click', function() { 
    this.classList.add('hidden'); 
});

function formatearFecha() { 
    const fechaOC = document.getElementById("fechaOC"); 
    const fechaOCOriginal = fechaOC.value;
    const [anio, mes, dia] = fechaOCOriginal.split("-");
    const fechaFormateadaOC = '${dia}'/'${mes}'/'${anio}';
    
    const fechaFact = document.getElementById("fechaFact");
    const fechaFactOriginal = fechaFact.value;
    const [anio1, mes1, dia1] = fechaFactOriginal.split("-");
    const fechaFormateadaFact = '${dia1}'/'${mes1}'/'${anio1}'; 
    
    const fechaEmision = document.getElementById("fechaEmision");
    const fechaEmisionOriginal = fechaEmision.value;
    const [anio2, mes2, dia2] = fechaEmisionOriginal.split("-");
    const fechaFormateadaEmision = '${dia2}'/'${mes2}'/'${anio2}'; 


}





