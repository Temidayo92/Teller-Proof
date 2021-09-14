    $(document).ready(function() {
        $('.noteCount').change(function() {
            countId = this.id;
            denomination = countId.substring(1, countId.length);
            amountId = "t" + denomination;
            amountEle = document.getElementById(amountId);
            x = parseFloat(this.value) * parseFloat(denomination);
            amountEle.innerHTML = x;
            refreshTotal();
        });

        function refreshTotal() {
            sum = 0;
            $('.grand').each(function(index) {
                sum += parseFloat(this.innerHTML);
            });
            grandTotal = document.getElementById("grandTotal");
            grandTotal.innerHTML = sum;
        };
    });

