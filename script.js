document.getElementById("form-oracao").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const pedido = document.getElementById("pedido").value;

    const mailtoLink = `mailto:seuemail@exemplo.com?subject=Pedido de Oração de ${nome}&body=${encodeURIComponent(pedido)}`;
    window.location.href = mailtoLink;

    alert("Seu pedido de oração foi enviado com sucesso!");
    document.getElementById("form-oracao").reset();
});
