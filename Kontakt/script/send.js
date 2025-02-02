document.getElementById("send-button").addEventListener("click", async function () {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const industry = document.getElementById("industry").value.trim();
    const project = document.getElementById("project").value.trim();

    if (!name || !phone || !email || !industry || !project) {
        alert("Wszystkie pola są wymagane!");
        return;
    }

    const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;

    const payload = {
        embeds: [
            {
                title: "Nowa prośba o wycenę",
                color: 5814783,
                fields: [
                    { name: "`👤` Imię", value: name },
                    { name: "`📞` Telefon", value: phone },
                    { name: "`📧` E-mail", value: email },
                    { name: "`🏢` Branża", value: industry },
                    { name: "`📜` Opis projektu", value: project },
                ],
                footer: { text: "Formularz kontaktowy" },
                timestamp: new Date(),
            },
        ],
    };

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            alert("Formularz wysłany pomyślnie!");
        } else {
            alert("Wystąpił błąd podczas wysyłania.");
        }
    } catch (error) {
        console.error("Błąd:", error);
        alert("Nie udało się wysłać zgłoszenia.");
    }
});
