document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("memberSelect");
    const info = document.getElementById("memberInfo");

    select.addEventListener("change", () => {
        const selectedId = select.value;
        if (!selectedId) {
            info.style.display = "none";
            return;
        }

        const member = membersData.find(m => m.id == selectedId);

        document.getElementById("name").textContent = member.name;
        document.getElementById("role").textContent = member.role;
        document.getElementById("email").textContent = member.email;
        //document.getElementById("id").textContent = member.id;

        info.style.display = "block";
    });
});
