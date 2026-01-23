<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>انشر وجبة جديدة</title>
    <link rel="stylesheet" href="Style.css">
    <style>
        .container { max-width: 500px; margin: 50px auto; padding: 20px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); font-family: sans-serif; }
        input, textarea { width: 100%; padding: 12px; margin: 10px 0; border: 1px solid #ddd; border-radius: 10px; box-sizing: border-box; }
        button { width: 100%; padding: 15px; background-color: #009688; color: white; border: none; border-radius: 10px; font-size: 18px; cursor: pointer; }
        .note { font-size: 13px; color: #007bff; margin-bottom: 10px; display: block; }
    </style>
</head>
<body>

    <div class="container">
        <h2 style="text-align: center;">انشر وجبة جديدة 📢</h2>
        <p style="text-align: center; color: #666;">امسح البيانات القديمة وحدد العدد المتوفر بدقة.</p>

        <input type="text" id="mealName" placeholder="اسم الوجبة (مثلاً: نص فرخة وأرز)">

        <input type="number" id="mealPrice" placeholder="السعر المطلوب (ج.م) - ضع 0 للمجاني" oninput="updateCommission()">
        <span id="commissionNote" class="note"></span>

        <input type="number" id="mealQty" placeholder="عدد الوجبات المتاحة (العداد)">

        <textarea id="mealDesc" placeholder="وصف سريع للوجبة . . ."></textarea>

        <button onclick="publishMeal()">نشر العرض الآن</button>
    </div>

    <script>
        // دالة حساب العمولة عشان البائع يعرف الصافي
        function updateCommission() {
            let price = parseFloat(document.getElementById('mealPrice').value) || 0;
            let note = document.getElementById('commissionNote');
            if (price > 0) {
                let net = price - (price * 0.15); // البائع بياخد 85%
                note.innerText = `صافي ربحك: ${net.toFixed(2)} ج.م (بعد خصم 15% عمولة للموقع).`;
            } else {
                note.innerText = "هذه الوجبة ستظهر للمشترين كوجبة مجانية.";
            }
        }

        // دالة حفظ البيانات كاملة بما فيها "العدد"
        function publishMeal() {
            const name = document.getElementById('mealName').value;
            const price = document.getElementById('mealPrice').value;
            const qty = document.getElementById('mealQty').value;
            const desc = document.getElementById('mealDesc').value;

            if (!name || !qty) {
                alert("برجاء إدخال اسم الوجبة وعددها!");
                return;
            }

            // تخزين البيانات عشان تظهر في صفحة Customer.html
            const mealData = {
                title: name,
                price: parseFloat(price),
                stock: parseInt(qty), // العداد اتسيف هنا
                description: desc
            };

            localStorage.setItem('latestMeal', JSON.stringify(mealData));
            alert("تم النشر بنجاح! العداد محدد بـ " + qty + " وجبة.");
            window.location.href = "index.html"; // العودة للرئيسية
        }
    </script>

</body>
</html>
