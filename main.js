// كود الربط مع Paymob وفودافون كاش
const PAYMOB_API_KEY = "حط_هنا_الـ_API_KEY_بتاعك"; 

function startPaymentProcess(price, qty, role) {
    let amountToPay = 0;

    // حسبة الـ 15% أو 15 جنيه عن الوجبة الواحدة
    if (price === 0) {
        amountToPay = (role === 'vendor') ? 0 : 15 * qty;
    } else {
        amountToPay = (price * 0.15) * qty;
    }

    if (amountToPay > 0) {
        alert("سيتم تحويلك لـ Paymob لدفع " + amountToPay + " ج.م (فودافون كاش)");
        // الكود هنا بيكلم بايموب لتنفيذ الدفع
    } else {
        alert("وجبة مجانية.. النشر فوراً بدون رسوم للبائع");
    }
}