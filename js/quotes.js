const quotes = [
    {quote: "편한것을 멀리하고 귀찮은것을 가까이하자"},
    {quote: "남과 나를 비교하지 말고 어제의 나와 오늘의 나를 비교하자"},
    {quote: "의미없는 경험은 없다."},
    {quote: "부정정인 사람들은 낙하산을 만들고 긍정적인 사람들은 비행기를 만든다."},
    {quote: "인내는 쓰지만 그 열매는 달다."},
    {quote: "가장 바쁜 사람이 가장 많은 시간을 얻는다."},
    {quote: "오늘 어렵다고 미룬일은 내일에도 어렵고 모레에도 어렵다."},
    {quote: "뜨거운 열정보다 중요한 것은 지속적인 열정이다."},
    {quote: "꾸준함은 순간의 열정을 이긴다."},
    {quote: "같은 실수를 두려워하되 새로운 실수를 두려워하지 말자"}
];

const quote = document.querySelector("#quote span");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;