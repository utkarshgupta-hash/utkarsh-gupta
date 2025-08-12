// AI8Digital Auto Loan Planner V13 - Enhanced Financial Validation System with Dynamic Q&A and Restored Dynamic Recommendations
console.log('🚗 AI8Digital Auto Loan Planner V13 Loading...');

// Car Image Database
const CAR_IMAGE_DATABASE = [
    {"name": "Tata Nexon", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/10905/1697698077299/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/nexon-exterior-right-front-three-quarter-109.jpeg"},
    {"name": "Tata Punch", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Punch/9580/1664195699527/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/106815/punch-exterior-right-front-three-quarter-4.jpeg"},
    {"name": "Tata Harrier", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Harrier/9142/1664275746476/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/29135/harrier-exterior-right-front-three-quarter-2.jpeg"},
    {"name": "Tata Safari", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Safari/9419/1664275847916/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/115777/safari-exterior-right-front-three-quarter-2.jpeg"},
    {"name": "Maruti Swift", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/9222/1677302253818/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/swift-exterior-right-front-three-quarter-61.jpeg"},
    {"name": "Maruti Baleno", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/9710/1677235367447/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/54437/baleno-exterior-right-front-three-quarter-109.jpeg"},
    {"name": "Maruti Brezza", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Brezza/9863/1677236162012/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-7.jpeg"},
    {"name": "Maruti Grand Vitara", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Grand-Vitara/9854/1677234736308/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/grand-vitara-exterior-right-front-three-quarter-109.jpeg"},
    {"name": "Hyundai i20", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/i20/9538/1677235845581/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/106815/i20-exterior-right-front-three-quarter-4.jpeg"},
    {"name": "Hyundai Creta", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/9578/1692160064164/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.jpeg"},
    {"name": "Hyundai Venue", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/9561/1677235685553/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/29135/venue-exterior-right-front-three-quarter-2.jpeg"},
    {"name": "Hyundai Verna", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Verna/10963/1677236010419/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/115777/verna-exterior-right-front-three-quarter-2.jpeg"},
    {"name": "Honda City", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/9304/1677234454105/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/city-exterior-right-front-three-quarter-61.jpeg"},
    {"name": "Honda Amaze", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Amaze/9310/1677234615094/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/54437/amaze-exterior-right-front-three-quarter-109.jpeg"},
    {"name": "Honda Elevate", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Elevate/11047/1693313896539/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/107543/elevate-exterior-right-front-three-quarter-7.jpeg"},
    {"name": "Toyota Innova Crysta", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9461/1677235545468/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/innova-crysta-exterior-right-front-three-quarter-109.jpeg"},
    {"name": "Toyota Fortuner", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/9465/1677235405364/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/106815/fortuner-exterior-right-front-three-quarter-4.jpeg"},
    {"name": "Toyota Urban Cruiser Hyryder", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Urban-Cruiser-Hyryder/9908/1677235265217/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/29135/hyryder-exterior-right-front-three-quarter-2.jpeg"},
    {"name": "Mahindra XUV700", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/XUV700/9781/1677234894169/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/115777/xuv700-exterior-right-front-three-quarter-2.jpeg"},
    {"name": "Mahindra Thar", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/9784/1677234974063/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/thar-exterior-right-front-three-quarter-61.jpeg"},
    {"name": "Mahindra Scorpio N", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio-N/9764/1677235044927/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/54437/scorpio-n-exterior-right-front-three-quarter-109.jpeg"},
    {"name": "Kia Seltos", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos/9346/1677235127026/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/107543/seltos-exterior-right-front-three-quarter-7.jpeg"},
    {"name": "Kia Sonet", "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Sonet/9353/1677235189122/front-left-side-47.jpg", "fallbackUrl": "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/sonet-exterior-right-front-three-quarter-109.jpeg"}
];

const GENERIC_CAR_IMAGE = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

// Comprehensive Car Database
const CAR_DATABASE = [
    { name: "Maruti Alto K10", aliases: ["alto", "alto k10", "maruti alto"], price: 4.5, range: "4.23 - 6.21", category: "Entry Hatchback" },
    { name: "Tata Tiago", aliases: ["tiago", "tata tiago"], price: 6.5, range: "5.0 - 8.55", category: "Compact Hatchback" },
    { name: "Maruti Swift", aliases: ["swift", "maruti swift"], price: 8.0, range: "6.49 - 9.64", category: "Premium Hatchback" },
    { name: "Maruti Baleno", aliases: ["baleno", "maruti baleno"], price: 8.5, range: "6.70 - 9.92", category: "Premium Hatchback" },
    { name: "Tata Punch", aliases: ["punch", "tata punch"], price: 8.2, range: "6.20 - 10.32", category: "Micro SUV" },
    { name: "Tata Nexon", aliases: ["nexon", "tata nexon"], price: 12.0, range: "8.88 - 16.6", category: "Compact SUV" },
    { name: "Hyundai i20", aliases: ["i20", "hyundai i20", "elite i20"], price: 9.5, range: "7.51 - 11.25", category: "Premium Hatchback" },
    { name: "Honda City", aliases: ["city", "honda city", "city hybrid"], price: 14.0, range: "12.38 - 16.19", category: "Sedan" },
    { name: "Hyundai Verna", aliases: ["verna", "hyundai verna"], price: 15.5, range: "11.07 - 17.58", category: "Sedan" },
    { name: "Hyundai Creta", aliases: ["creta", "hyundai creta", "creta facelift"], price: 16.0, range: "11.11 - 20.50", category: "Compact SUV" },
    { name: "Kia Seltos", aliases: ["seltos", "kia seltos"], price: 16.5, range: "11.89 - 20.50", category: "Compact SUV" },
    { name: "Mahindra XUV700", aliases: ["xuv700", "mahindra xuv700", "xuv 700"], price: 20.0, range: "14.49 - 25.14", category: "Large SUV" },
    { name: "Tata Harrier", aliases: ["harrier", "tata harrier"], price: 18.0, range: "15.0 - 26.50", category: "Mid-size SUV" },
    { name: "Mahindra Scorpio N", aliases: ["scorpio", "scorpio n", "mahindra scorpio"], price: 17.5, range: "13.77 - 17.72", category: "SUV" },
    { name: "Toyota Innova Crysta", aliases: ["innova", "toyota innova", "innova crysta"], price: 23.5, range: "19.99 - 26.30", category: "MPV" },
    { name: "Toyota Fortuner", aliases: ["fortuner", "toyota fortuner"], price: 42.0, range: "36.05 - 52.34", category: "Large SUV" },
    { name: "Maruti Ertiga", aliases: ["ertiga", "maruti ertiga"], price: 11.0, range: "8.69 - 12.79", category: "MPV" },
    { name: "Maruti Brezza", aliases: ["brezza", "maruti brezza", "vitara brezza"], price: 11.5, range: "8.34 - 14.14", category: "Compact SUV" },
    { name: "Mahindra Thar", aliases: ["thar", "mahindra thar"], price: 14.5, range: "11.25 - 17.60", category: "Off-road SUV" },
    { name: "Honda Amaze", aliases: ["amaze", "honda amaze"], price: 8.0, range: "7.20 - 11.20", category: "Compact Sedan" },
    { name: "Honda Elevate", aliases: ["elevate", "honda elevate"], price: 13.5, range: "11.0 - 16.5", category: "Compact SUV" },
    { name: "Toyota Urban Cruiser Hyryder", aliases: ["hyryder", "urban cruiser", "toyota hyryder"], price: 13.0, range: "11.14 - 20.19", category: "Compact SUV" },
    { name: "Maruti Grand Vitara", aliases: ["grand vitara", "maruti grand vitara"], price: 12.5, range: "10.70 - 19.65", category: "Compact SUV" },
    { name: "Hyundai Venue", aliases: ["venue", "hyundai venue"], price: 9.0, range: "7.94 - 13.48", category: "Compact SUV" }
];

// Lifestyle Categories
const LIFESTYLE_CATEGORIES = {
    basic: { ratio: 0.55, label: "Basic (55% expenses)", description: "Essential expenses only" },
    balanced: { ratio: 0.65, label: "Balanced (65% expenses)", description: "Moderate lifestyle with entertainment" },
    premium: { ratio: 0.75, label: "Premium (75% expenses)", description: "Comfortable lifestyle with premium purchases" }
};

// Application State
let currentCalculation = null;
let progressChart = null;
let isLayoutTransitioned = false;
let realTimeValidation = null;

// V13 Elements Cache
const elements = {
    carMatchStatus: null,
    matchIcon: null,
    matchText: null,
    alternativesCard: null,
    alternativesGrid: null
};

// Utility Functions
function formatCurrency(amount) {
    if (!amount || isNaN(amount) || amount <= 0) return '₹0';
    if (amount >= 10000000) return `₹${(amount/10000000).toFixed(1)} Cr`;
    if (amount >= 100000) return `₹${(amount/100000).toFixed(1)} L`;
    return `₹${Math.round(amount).toLocaleString('en-IN')}`;
}

function safeGetElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element not found: ${id}`);
    }
    return element;
}

function setText(id, text) {
    const element = safeGetElement(id);
    if (element) element.textContent = text || '';
}

function setHTML(id, html) {
    const element = safeGetElement(id);
    if (element) element.innerHTML = html || '';
}

function showElement(id) {
    const element = safeGetElement(id);
    if (element) element.classList.remove('hidden');
}

function hideElement(id) {
    const element = safeGetElement(id);
    if (element) element.classList.add('hidden');
}

// V13 RESTORED: getAffordableCars function identical to V12
function getAffordableCars(calc) {
    console.log('V13: Getting affordable cars based on calculation:', calc);
    
    if (!calc || !calc.maxEMI || !calc.totalSavings) {
        console.log('V13: Missing calculation data for affordable cars');
        return [];
    }
    
    const maxAffordablePrice = (calc.maxLoanAmount + calc.totalSavings) / 100000; // Convert to lakhs
    const currentCarPrice = calc.carPriceLakhs;
    
    console.log('V13: Max affordable price:', maxAffordablePrice, 'Current car:', currentCarPrice);
    
    // Filter cars that are affordable and not the current car
    const affordableCars = CAR_DATABASE.filter(car => {
        const isAffordable = car.price <= maxAffordablePrice;
        const isDifferent = car.name !== calc.car.name;
        const isCheaper = car.price < currentCarPrice; // Only show cheaper alternatives
        
        return isAffordable && isDifferent && isCheaper;
    }).map(car => {
        // Calculate specific benefits for each alternative
        const savings = (currentCarPrice - car.price);
        const carPriceRupees = car.price * 100000;
        const loanAmount = carPriceRupees - (calc.totalSavings > carPriceRupees * 0.2 ? carPriceRupees * 0.2 : calc.totalSavings);
        const emi = calculateEMI(loanAmount, calc.interestRate, calc.loanTenure);
        const affordabilityIndex = calc.disposableIncome > 0 ? (emi / calc.disposableIncome) * 100 : 100;
        
        return {
            ...car,
            savings,
            emi,
            affordabilityIndex,
            financialBenefit: savings > 2 ? `Save ₹${savings.toFixed(1)}L` : 'Better Budget Fit'
        };
    }).sort((a, b) => a.affordabilityIndex - b.affordabilityIndex); // Sort by affordability
    
    console.log('V13: Found', affordableCars.length, 'affordable alternatives:', affordableCars);
    return affordableCars;
}

// V13 NEW: Dynamic Q&A Answer Generator
function generateDynamicAnswer(question, calc, car) {
    console.log('V13: Generating dynamic answer for:', question);
    
    if (!calc || !car) {
        return '<p>Please complete the calculation first to get personalized insights.</p>';
    }
    
    const income = formatCurrency(calc.income);
    const expenses = formatCurrency(calc.expenses);
    const disposableIncome = formatCurrency(calc.disposableIncome);
    const actualEMI = formatCurrency(calc.actualEMI);
    const maxSafeEMI = formatCurrency(calc.maxEMI);
    const carPrice = formatCurrency(calc.carPriceRupees);
    const requiredDownPayment = formatCurrency(calc.requiredDownPayment);
    const availableSavings = formatCurrency(calc.totalSavings);
    const shortfall = calc.totalSavings < calc.requiredDownPayment ? 
        formatCurrency(calc.requiredDownPayment - calc.totalSavings) : '₹0';
    const affordabilityRatio = calc.affordabilityIndex.toFixed(1);
    
    switch(question) {
        case 'why-cant-afford':
            if (calc.affordabilityIndex <= 35) {
                return `
                    <p><strong>Good news!</strong> You can afford the ${car.name}. Here's why:</p>
                    <ul>
                        <li><strong>Your EMI:</strong> ${actualEMI}/month fits well within your ${disposableIncome} disposable income</li>
                        <li><strong>EMI Ratio:</strong> ${affordabilityRatio}% of disposable income (Safe: ≤35%)</li>
                        <li><strong>Down Payment:</strong> You have ${availableSavings} savings vs required ${requiredDownPayment}</li>
                        <li><strong>Financial Safety:</strong> This purchase maintains your financial stability</li>
                    </ul>
                `;
            } else if (calc.affordabilityIndex <= 60) {
                return `
                    <p><strong>You can afford the ${car.name}, but it will stretch your budget:</strong></p>
                    <ul>
                        <li><strong>Your EMI:</strong> ${actualEMI}/month from ${disposableIncome} disposable income</li>
                        <li><strong>EMI Ratio:</strong> ${affordabilityRatio}% of disposable income (Caution: 35-60%)</li>
                        <li><strong>Impact:</strong> Limited flexibility for emergencies or other goals</li>
                        <li><strong>Recommendation:</strong> Consider a slightly smaller car or increase down payment</li>
                    </ul>
                `;
            } else {
                return `
                    <p><strong>The ${car.name} is beyond your safe financial limit. Here's why:</strong></p>
                    <ul>
                        <li><strong>Required EMI:</strong> ${actualEMI}/month vs your safe limit of ${maxSafeEMI}</li>
                        <li><strong>EMI Ratio:</strong> ${affordabilityRatio}% of your ${disposableIncome} disposable income</li>
                        <li><strong>Risk:</strong> This would consume too much of your monthly income</li>
                        <li><strong>Impact:</strong> Minimal funds left for savings, emergencies, or other expenses</li>
                    </ul>
                `;
            }
            
        case 'how-much-save':
            const additionalSavingsNeeded = Math.max(0, calc.requiredDownPayment - calc.totalSavings);
            const monthsToSave = Math.ceil(additionalSavingsNeeded / (calc.disposableIncome * 0.2));
            
            if (additionalSavingsNeeded <= 0) {
                const recommendedIncrease = calc.carPriceRupees * 0.1; // 10% more as buffer
                return `
                    <p><strong>You already have sufficient savings!</strong></p>
                    <ul>
                        <li><strong>Required Down Payment:</strong> ${requiredDownPayment}</li>
                        <li><strong>Your Savings:</strong> ${availableSavings}</li>
                        <li><strong>Surplus:</strong> ${formatCurrency(calc.totalSavings - calc.requiredDownPayment)}</li>
                        <li><strong>Recommendation:</strong> Save additional ${formatCurrency(recommendedIncrease)} as buffer for insurance, registration, and accessories</li>
                    </ul>
                `;
            } else {
                return `
                    <p><strong>You need to save ${formatCurrency(additionalSavingsNeeded)} more for the ${car.name}:</strong></p>
                    <ul>
                        <li><strong>Required Down Payment:</strong> ${requiredDownPayment}</li>
                        <li><strong>Your Current Savings:</strong> ${availableSavings}</li>
                        <li><strong>Shortfall:</strong> ${shortfall}</li>
                        <li><strong>Monthly Savings Target:</strong> ${formatCurrency(additionalSavingsNeeded/12)} to achieve in 1 year</li>
                        <li><strong>With 20% of disposable income:</strong> Achievable in ~${monthsToSave} months</li>
                    </ul>
                `;
            }
            
        case 'what-salary':
            const requiredDisposableIncome = calc.actualEMI / 0.35; // For 35% safe ratio
            const requiredGrossIncome = requiredDisposableIncome + calc.expenses;
            const salaryIncrease = Math.max(0, requiredGrossIncome - calc.income);
            
            if (salaryIncrease <= 0) {
                return `
                    <p><strong>Your current salary of ${income}/month is sufficient for the ${car.name}!</strong></p>
                    <ul>
                        <li><strong>Current Income:</strong> ${income}/month</li>
                        <li><strong>Monthly Expenses:</strong> ${expenses}/month</li>
                        <li><strong>Disposable Income:</strong> ${disposableIncome}/month</li>
                        <li><strong>Required for Safe EMI:</strong> ${formatCurrency(calc.actualEMI / 0.35)}/month disposable</li>
                        <li><strong>Status:</strong> ✅ You meet the financial requirements</li>
                    </ul>
                `;
            } else {
                return `
                    <p><strong>To comfortably afford the ${car.name}, you would need:</strong></p>
                    <ul>
                        <li><strong>Required Salary:</strong> ${formatCurrency(requiredGrossIncome)}/month</li>
                        <li><strong>Your Current Salary:</strong> ${income}/month</li>
                        <li><strong>Salary Increase Needed:</strong> ${formatCurrency(salaryIncrease)}/month</li>
                        <li><strong>Percentage Increase:</strong> ${((salaryIncrease/calc.income)*100).toFixed(1)}%</li>
                        <li><strong>Alternative:</strong> Reduce monthly expenses by ${formatCurrency(salaryIncrease)} or choose a less expensive car</li>
                    </ul>
                `;
            }
            
        case 'max-price':
            const maxLoanAmount = calc.maxEMI * 12 * calc.loanTenure / (1 + 0.1 * calc.loanTenure); // Simplified calculation
            const maxCarPrice = (maxLoanAmount + calc.totalSavings);
            const maxCarPriceLakhs = maxCarPrice / 100000;
            
            return `
                <p><strong>Based on your financial profile, your maximum affordable car price is:</strong></p>
                <ul>
                    <li><strong>Maximum Car Price:</strong> ${formatCurrency(maxCarPrice)} (${maxCarPriceLakhs.toFixed(1)} Lakhs)</li>
                    <li><strong>Calculation Basis:</strong></li>
                    <li>&nbsp;&nbsp;• Max Safe EMI: ${maxSafeEMI}/month (35% of ${disposableIncome})</li>
                    <li>&nbsp;&nbsp;• Max Loan Amount: ${formatCurrency(maxLoanAmount)}</li>
                    <li>&nbsp;&nbsp;• Available Down Payment: ${availableSavings}</li>
                    <li><strong>Current Car Price:</strong> ${carPrice} (${((calc.carPriceRupees/maxCarPrice)*100).toFixed(1)}% of your max budget)</li>
                    <li><strong>Recommendation:</strong> Look for cars priced up to ${formatCurrency(maxCarPrice)} for optimal financial safety</li>
                </ul>
            `;
            
        default:
            return '<p>Please select a valid question to get personalized insights.</p>';
    }
}

// V13 NEW: Update Q&A with Dynamic Answers
function updateQA(calc, selectedCar) {
    console.log('V13: Updating Q&A with dynamic answers');
    
    if (!calc || !selectedCar) {
        console.log('V13: Missing calc or selectedCar data for Q&A update');
        return;
    }
    
    // Generate and set dynamic answers
    const questions = ['why-cant-afford', 'how-much-save', 'what-salary', 'max-price'];
    const answerIds = ['whyCantAffordAnswer', 'howMuchSaveAnswer', 'whatSalaryAnswer', 'maxAffordablePriceAnswer'];
    
    questions.forEach((question, index) => {
        const answerId = answerIds[index];
        const answerElement = safeGetElement(answerId);
        
        if (answerElement) {
            const dynamicAnswer = generateDynamicAnswer(question, calc, selectedCar);
            const answerContent = answerElement.querySelector('.answer-content');
            
            if (answerContent) {
                answerContent.innerHTML = dynamicAnswer;
                console.log(`V13: Updated ${question} answer with real calculation data`);
            }
        }
    });
    
    console.log('V13: All Q&A answers updated with personalized insights');
}

// V13 NEW: Helper function to update car match status with synchronized styling
function updateCarMatchStatus(status, icon, message) {
    console.log('V13: Updating car match status:', { status, icon, message });
    
    // Get elements fresh each time to ensure they exist
    const carMatchStatus = safeGetElement('carMatchStatus');
    const matchIcon = safeGetElement('matchIcon');
    const matchText = safeGetElement('matchText');
    
    if (carMatchStatus && matchIcon && matchText) {
        // Set the status class using match-status-{status} format
        carMatchStatus.className = `car-match-status match-status-${status}`;
        
        // Set icon and message
        matchIcon.textContent = icon;
        matchText.textContent = message;
        
        // Show the element
        carMatchStatus.classList.remove('hidden');
        
        console.log('V13: Car match status updated successfully');
    } else {
        console.error('V13: Could not update car match status - missing elements', {
            carMatchStatus: !!carMatchStatus,
            matchIcon: !!matchIcon,
            matchText: !!matchText
        });
    }
}

// V13 Layout Transition System
function triggerLayoutTransition() {
    console.log('Triggering V13 layout transition...');
    const mainContainer = safeGetElement('mainContainer');
    const resultsContainer = safeGetElement('resultsContainer');
    const mainHeadings = safeGetElement('mainHeadings');
    const sidebarHeading = safeGetElement('sidebarHeading');
    const blockingContainer = safeGetElement('blockingMessageContainer');
    
    if (mainContainer && resultsContainer) {
        // Hide blocking message if shown
        if (blockingContainer) blockingContainer.classList.add('hidden');
        
        // Change layout class
        mainContainer.classList.remove('layout-initial');
        mainContainer.classList.add('layout-calculated');
        
        // Switch headings
        if (mainHeadings) mainHeadings.classList.add('hidden');
        if (sidebarHeading) sidebarHeading.classList.remove('hidden');
        
        // Show results container
        resultsContainer.classList.remove('hidden');
        
        isLayoutTransitioned = true;
        console.log('V13 layout transition completed');
        
        // Smooth scroll to results after transition
        setTimeout(() => {
            const carImageSection = safeGetElement('carImageSection');
            if (carImageSection) {
                carImageSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 600);
    } else {
        console.error('Layout transition failed - missing elements');
    }
}

// V13 Blocking Message System
function showBlockingMessage(title, content, alternatives = []) {
    console.log('Showing blocking message:', title);
    
    const blockingContainer = safeGetElement('blockingMessageContainer');
    const resultsContainer = safeGetElement('resultsContainer');
    
    if (!blockingContainer) return;
    
    setText('blockingTitle', title);
    setHTML('blockingContent', content);
    
    // Show alternatives
    const alternativesElement = safeGetElement('blockingAlternatives');
    if (alternativesElement && alternatives.length > 0) {
        const alternativesHTML = `
            <h4>💡 Try These Instead:</h4>
            <div class="alternatives-quick">
                ${alternatives.map(car => `
                    <div class="alternative-quick-card" onclick="selectCar('${car.name}')">
                        ${car.name} - ₹${car.range} L
                    </div>
                `).join('')}
            </div>
        `;
        setHTML('blockingAlternatives', alternativesHTML);
    } else {
        setHTML('blockingAlternatives', '');
    }
    
    // Show blocking message and hide results
    blockingContainer.classList.remove('hidden');
    if (resultsContainer) resultsContainer.classList.add('hidden');
    
    // Keep in initial layout
    const mainContainer = safeGetElement('mainContainer');
    if (mainContainer) {
        mainContainer.classList.remove('layout-calculated');
        mainContainer.classList.add('layout-initial');
        
        const mainHeadings = safeGetElement('mainHeadings');
        const sidebarHeading = safeGetElement('sidebarHeading');
        if (mainHeadings) mainHeadings.classList.remove('hidden');
        if (sidebarHeading) sidebarHeading.classList.add('hidden');
    }
    
    isLayoutTransitioned = false;
}

function hideBlockingMessage() {
    const blockingContainer = safeGetElement('blockingMessageContainer');
    if (blockingContainer) {
        blockingContainer.classList.add('hidden');
    }
}

// V13 ENHANCED: Affordability Check with synchronized status return
function performAffordabilityCheck(car, income, expenses, savings, loanTenure = 5) {
    console.log('V13: Performing affordability check with synchronized status...');
    
    const carPriceRupees = car.price * 100000;
    const disposableIncome = income - expenses;
    const interestRate = 10; // Default 10% interest rate
    
    // Calculate financial metrics
    const minDownPayment = carPriceRupees * 0.20;
    const maxSafeEMI = disposableIncome * 0.35;
    
    // Check basic feasibility
    if (savings < minDownPayment) {
        return {
            feasible: false,
            reason: 'insufficient_savings',
            status: 'red',
            statusIcon: '❌',
            statusMessage: `Found: ${car.name}. Not financially recommended`,
            affordabilityIndex: 100,
            emi: 0,
            minDownPayment,
            maxSafeEMI
        };
    }
    
    const loanAmount = carPriceRupees - minDownPayment;
    const actualEMI = calculateEMI(loanAmount, interestRate, loanTenure);
    
    if (actualEMI > maxSafeEMI) {
        return {
            feasible: false,
            reason: 'excessive_emi',
            status: 'red',
            statusIcon: '❌',
            statusMessage: `Found: ${car.name}. Not financially recommended`,
            affordabilityIndex: 100,
            emi: actualEMI,
            minDownPayment,
            maxSafeEMI
        };
    }
    
    // Calculate affordability index
    const affordabilityIndex = (actualEMI / disposableIncome) * 100;
    
    // V13 SYNCHRONIZED STATUS LOGIC: Match exactly with AI-Powered Affordability Analysis
    let status, statusIcon, statusMessage;
    
    if (affordabilityIndex <= 35) {
        status = 'green';
        statusIcon = '✅';
        statusMessage = `Found: ${car.name}. Good financial match`;
    } else if (affordabilityIndex <= 60) {
        status = 'yellow';
        statusIcon = '⚠️';
        statusMessage = `Found: ${car.name}. Stretches budget`;
    } else {
        status = 'red';
        statusIcon = '❌';
        statusMessage = `Found: ${car.name}. Not financially recommended`;
    }
    
    console.log('V13: Affordability check completed:', { status, statusIcon, statusMessage, affordabilityIndex });
    
    return {
        feasible: true,
        status,
        statusIcon,
        statusMessage,
        affordabilityIndex,
        emi: actualEMI,
        minDownPayment,
        maxSafeEMI,
        carPriceRupees,
        disposableIncome
    };
}

// V13 Real-time Car Match & Financial Feasibility Check - UPDATED
function performRealTimeValidation(carName) {
    console.log('V13: Performing real-time validation for:', carName);
    
    if (!carName || carName.length < 2) {
        hideElement('carMatchStatus');
        return;
    }
    
    const searchResults = searchCars(carName);
    if (searchResults.length === 0) {
        updateCarMatchStatus('gray', '❌', 'Car not found in database');
        return;
    }
    
    // Get current financial data
    const income = parseFloat(safeGetElement('monthlyIncome')?.value || '0');
    const expenses = parseFloat(safeGetElement('monthlyExpenses')?.value || '0');
    const savings = parseFloat(safeGetElement('totalSavings')?.value || '0');
    
    if (income <= 0 || expenses <= 0) {
        updateCarMatchStatus('yellow', '⚠️', 'Complete your financial profile first');
        return;
    }
    
    const car = searchResults[0];
    
    // V13 UPDATED: Use performAffordabilityCheck for consistent logic
    const result = performAffordabilityCheck(car, income, expenses, savings);
    
    // V13 UPDATED: Use the new helper function with synchronized status
    updateCarMatchStatus(result.status, result.statusIcon, result.statusMessage);
    
    // Store for later use
    realTimeValidation = {
        car,
        affordabilityResult: result,
        canAfford: result.feasible && result.affordabilityIndex <= 60
    };
    
    console.log('V13: Real-time validation completed with synchronized status:', realTimeValidation);
}

// Car Image Loading
function loadCarImage(carData) {
    console.log('Loading car image for:', carData?.car?.name);
    
    const carImage = safeGetElement('carImage');
    const placeholder = safeGetElement('carImagePlaceholder');
    
    if (!carImage || !placeholder) return;
    
    // Show placeholder initially
    carImage.classList.add('hidden');
    placeholder.classList.remove('hidden');
    
    // Try to find image in database
    const imageMatch = findCarImageInDatabase(carData.car.name);
    
    if (imageMatch) {
        const img = new Image();
        img.onload = function() {
            carImage.src = this.src;
            carImage.alt = `${carData.car.name} - ${carData.car.category}`;
            placeholder.classList.add('hidden');
            carImage.classList.remove('hidden');
            console.log('Car image loaded successfully:', imageMatch.name);
        };
        
        img.onerror = function() {
            console.log('Primary image failed, using generic image');
            loadGenericCarImage(carData);
        };
        
        img.src = imageMatch.imageUrl;
    } else {
        loadGenericCarImage(carData);
    }
}

function findCarImageInDatabase(carName) {
    if (!carName) return null;
    
    const searchTerm = carName.toLowerCase().trim();
    
    // Direct name match
    let match = CAR_IMAGE_DATABASE.find(car => 
        car.name.toLowerCase().includes(searchTerm) || 
        searchTerm.includes(car.name.toLowerCase())
    );
    
    if (match) {
        console.log('Image match found:', match.name);
        return match;
    }
    
    console.log('No car image match found for:', carName);
    return null;
}

function loadGenericCarImage(carData) {
    const carImage = safeGetElement('carImage');
    const placeholder = safeGetElement('carImagePlaceholder');
    
    if (!carImage || !placeholder) return;
    
    carImage.src = GENERIC_CAR_IMAGE;
    carImage.alt = `${carData.car.name} - ${carData.car.category}`;
    placeholder.classList.add('hidden');
    carImage.classList.remove('hidden');
    console.log('Generic car image loaded');
}

function updateCarImageSection() {
    const calc = currentCalculation;
    if (!calc) return;
    
    // Update car details overlay
    setText('selectedCarName', calc.car.name);
    setText('selectedCarCategory', calc.car.category);
    setText('selectedCarPrice', `₹${calc.car.range} L`);
    
    // Load car image
    loadCarImage(calc);
    
    // Show car image section
    showElement('carImageSection');
}

// V13 Enhanced Analysis Cards
function updateAnalysisCards() {
    const calc = currentCalculation;
    if (!calc) return;
    
    console.log('Updating V13 analysis cards...', calc);
    
    // Update Monthly EMI Card
    setText('analysisEMI', formatCurrency(calc.actualEMI));
    setText('analysisEMIDetails', `Based on ${calc.loanTenure} year loan at 10% interest`);
    
    // Update Affordability Status Card (text-based)
    const affordabilityElement = safeGetElement('analysisAffordability');
    const indicatorFill = safeGetElement('indicatorFill');
    const indicatorText = safeGetElement('indicatorText');
    
    let statusText, statusClass, indicatorClass;
    
    if (calc.affordabilityIndex <= 35) {
        statusText = '🟢 Financially Safe';
        statusClass = 'green';
        indicatorClass = 'green';
    } else if (calc.affordabilityIndex <= 60) {
        statusText = '🟡 Budget Stretch';
        statusClass = 'yellow';
        indicatorClass = 'yellow';
    } else {
        statusText = '🔴 Not Recommended';
        statusClass = 'red';
        indicatorClass = 'red';
    }
    
    if (affordabilityElement) {
        affordabilityElement.textContent = statusText;
        affordabilityElement.className = `analysis-value affordability-text ${statusClass}`;
    }
    
    if (indicatorFill) {
        const fillPercentage = Math.min(calc.affordabilityIndex, 100);
        indicatorFill.style.width = `${fillPercentage}%`;
        indicatorFill.className = `indicator-fill ${indicatorClass}`;
    }
    
    if (indicatorText) {
        indicatorText.textContent = `${calc.affordabilityIndex.toFixed(1)}% of disposable income`;
    }
    
    // Update Savings Usage Card
    setText('analysisSavings', `${calc.savingsBurnRate.toFixed(1)}%`);
    setText('analysisSavingsDetails', 
        calc.totalSavings > 0 ? 
        `${formatCurrency(calc.actualDownPayment)} of ${formatCurrency(calc.totalSavings)} used` :
        'No savings available'
    );
    
    // Show analysis row
    showElement('analysisRow');
    
    console.log('V13 analysis cards updated successfully');
}

// EMI Calculations
function calculateEMI(principal, rate, years) {
    if (!principal || !rate || !years || principal <= 0) return 0;
    
    const monthlyRate = rate / (12 * 100);
    const months = years * 12;
    
    if (monthlyRate === 0) return Math.round(principal / months);
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
               (Math.pow(1 + monthlyRate, months) - 1);
    
    return Math.round(emi);
}

function calculateMaxLoanAmount(emi, rate, years) {
    if (!emi || !rate || !years || emi <= 0) return 0;
    
    const monthlyRate = rate / (12 * 100);
    const months = years * 12;
    
    if (monthlyRate === 0) return emi * months;
    
    const maxLoan = (emi * (Math.pow(1 + monthlyRate, months) - 1)) / 
                   (monthlyRate * Math.pow(1 + monthlyRate, months));
    
    return Math.round(maxLoan);
}

// Car Search
function searchCars(query) {
    if (!query || query.length < 2) return [];
    
    const searchTerm = query.toLowerCase().trim();
    const results = [];
    
    CAR_DATABASE.forEach(car => {
        let score = 0;
        let matchType = 'Partial Match';
        
        if (car.name.toLowerCase().includes(searchTerm)) {
            score = 700;
            matchType = 'Good Match';
        }
        
        car.aliases.forEach(alias => {
            if (alias.includes(searchTerm)) {
                score = Math.max(score, 600);
                matchType = 'Good Match';
            }
        });
        
        if (score > 0) {
            results.push({ ...car, score, matchType });
        }
    });
    
    return results.sort((a, b) => b.score - a.score).slice(0, 6);
}

function showSuggestions(suggestions) {
    const dropdown = safeGetElement('suggestionsDropdown');
    if (!dropdown) return;
    
    if (suggestions.length === 0) {
        hideElement('suggestionsDropdown');
        return;
    }
    
    const html = suggestions.map(car => `
        <div class="suggestion-item" onclick="selectCar('${car.name}')">
            <div class="suggestion-car-name">${car.name}</div>
            <div class="suggestion-details">
                <span>${car.category}</span>
                <span class="suggestion-price">₹${car.range} L</span>
            </div>
        </div>
    `).join('');
    
    setHTML('suggestionsDropdown', html);
    showElement('suggestionsDropdown');
}

function selectCar(carName) {
    console.log('Selecting car:', carName);
    const carInput = safeGetElement('carName');
    if (carInput) {
        carInput.value = carName;
        hideElement('suggestionsDropdown');
        // Trigger real-time validation
        performRealTimeValidation(carName);
        console.log('Car selected and validation triggered:', carName);
    }
}

// FIXED: Expense Estimation to work with regular HTML select
function updateExpenseEstimation() {
    console.log('Updating expense estimation...');
    
    const incomeInput = safeGetElement('monthlyIncome');
    const lifestyleSelect = safeGetElement('lifestyleCategory');
    const expensesInput = safeGetElement('monthlyExpenses');
    
    if (!incomeInput || !lifestyleSelect || !expensesInput) {
        console.error('Required elements not found for expense estimation');
        return;
    }
    
    const income = parseFloat(incomeInput.value || '0');
    const lifestyle = lifestyleSelect.value;
    
    console.log('Processing expense estimation - Income:', income, 'Lifestyle:', lifestyle);
    
    if (income > 0 && lifestyle && LIFESTYLE_CATEGORIES[lifestyle]) {
        const category = LIFESTYLE_CATEGORIES[lifestyle];
        const estimatedExpenses = Math.round(income * category.ratio);
        
        expensesInput.value = estimatedExpenses;
        
        const estimationText = `Based on your ${category.label.toLowerCase()}, estimated monthly expenses: ${formatCurrency(estimatedExpenses)}. ${category.description}`;
        setText('estimationText', estimationText);
        showElement('expenseEstimation');
        
        console.log('Expense estimation updated successfully:', estimatedExpenses);
        
        // Trigger real-time validation if car is selected
        const carInput = safeGetElement('carName');
        if (carInput && carInput.value) {
            performRealTimeValidation(carInput.value);
        }
    } else {
        hideElement('expenseEstimation');
        if (income <= 0) {
            expensesInput.value = '';
        }
        console.log('Expense estimation not updated - missing income or lifestyle');
    }
}

// V13 Main Calculation with Enhanced Validation - FIXED
function performCalculation() {
    console.log('Starting V13 calculation with enhanced validation...');
    
    // Show processing state
    const btn = safeGetElement('calculateBtn');
    const originalHTML = btn ? btn.innerHTML : '';
    
    if (btn) {
        btn.innerHTML = '<span class="btn-icon">⏳</span>Calculating...';
        btn.disabled = true;
    }
    
    // FIXED: Remove timeout wrapper that was causing issues
    try {
        hideAllResults();
        hideBlockingMessage();
        
        const result = doCalculation();
        
        if (result.success) {
            console.log('Calculation successful, triggering layout transition...');
            
            if (!isLayoutTransitioned) {
                triggerLayoutTransition();
            }
            
            // FIXED: Call displayResults immediately without timeout
            displayResults();
            console.log('V13 calculation completed successfully');
        } else {
            showError(result.error);
            console.log('Calculation failed:', result.error);
        }
        
    } catch (error) {
        console.error('Calculation error:', error);
        showError('Calculation failed: ' + error.message);
    } finally {
        // Reset button
        setTimeout(() => {
            if (btn) {
                btn.innerHTML = originalHTML;
                btn.disabled = false;
            }
        }, 1000);
    }
}

// V13 Enhanced Calculation Logic - FIXED
function doCalculation() {
    console.log('Starting V13 doCalculation...');
    
    const incomeElement = safeGetElement('monthlyIncome');
    const savingsElement = safeGetElement('totalSavings');
    const expensesElement = safeGetElement('monthlyExpenses');
    const carElement = safeGetElement('carName');
    const tenureElement = safeGetElement('loanTenure');
    
    if (!incomeElement || !savingsElement || !expensesElement || !carElement || !tenureElement) {
        return { success: false, error: 'Required input fields not found' };
    }
    
    const income = parseFloat(incomeElement.value || '0');
    const totalSavings = parseFloat(savingsElement.value || '0');
    const expenses = parseFloat(expensesElement.value || '0');
    const carName = carElement.value.trim();
    const loanTenure = parseInt(tenureElement.value || '5');
    
    console.log('V13 calculation inputs:', { income, totalSavings, expenses, carName, loanTenure });
    
    // Enhanced validation with better error messages
    if (income < 10000) {
        return { success: false, error: 'Monthly income must be at least ₹10,000' };
    }
    if (totalSavings < 0) {
        return { success: false, error: 'Total savings cannot be negative' };
    }
    if (expenses <= 0) {
        return { success: false, error: 'Monthly expenses must be greater than 0. Please select a Lifestyle Category to auto-calculate.' };
    }
    if (expenses >= income) {
        return { success: false, error: 'Monthly expenses must be less than income' };
    }
    if (!carName) {
        return { success: false, error: 'Please enter a car name' };
    }
    
    // Find car
    const searchResults = searchCars(carName);
    if (searchResults.length === 0) {
        return { success: false, error: `Car "${carName}" not found. Try: Nexon, Swift, City, Creta` };
    }
    
    const car = searchResults[0];
    const carPriceRupees = car.price * 100000;
    
    // Financial calculations
    const disposableIncome = income - expenses;
    const maxEMI = Math.round(disposableIncome * 0.35);
    const interestRate = 10;
    
    console.log('Financial calculations:', { disposableIncome, maxEMI, carPriceRupees });
    
    // Calculate loan details
    const minDownPayment = carPriceRupees * 0.20;
    const maxLoanAmount = calculateMaxLoanAmount(maxEMI, interestRate, loanTenure);
    const requiredDownPayment = Math.max(minDownPayment, carPriceRupees - maxLoanAmount);
    
    const canAffordDownPayment = totalSavings >= requiredDownPayment;
    const actualDownPayment = canAffordDownPayment ? requiredDownPayment : totalSavings;
    const actualLoanAmount = carPriceRupees - actualDownPayment;
    const actualEMI = calculateEMI(actualLoanAmount, interestRate, loanTenure);
    
    console.log('Loan calculations:', { actualEMI, maxEMI, actualLoanAmount });
    
    const affordabilityIndex = disposableIncome > 0 ? (actualEMI / disposableIncome) * 100 : 100;
    const savingsBurnRate = totalSavings > 0 ? (actualDownPayment / totalSavings) * 100 : 0;
    
    // V13 ENHANCED: Calculate synchronized status for final results
    let affordabilityStatus, statusIcon, statusText;
    
    if (affordabilityIndex <= 35) {
        affordabilityStatus = 'green';
        statusIcon = '✅';
        statusText = `Found: ${car.name}. Good financial match`;
    } else if (affordabilityIndex <= 60) {
        affordabilityStatus = 'yellow';
        statusIcon = '⚠️';
        statusText = `Found: ${car.name}. Stretches budget`;
    } else {
        affordabilityStatus = 'red';
        statusIcon = '❌';
        statusText = `Found: ${car.name}. Not financially recommended`;
    }
    
    // Store results
    currentCalculation = {
        income, totalSavings, expenses, disposableIncome,
        car, carPriceRupees, carPriceLakhs: car.price, loanTenure,
        maxEMI, maxLoanAmount, requiredDownPayment, actualDownPayment,
        actualLoanAmount, actualEMI, affordabilityIndex, savingsBurnRate,
        canAffordDownPayment, interestRate, minDownPayment,
        // V13 NEW: Store synchronized status for display
        affordabilityStatus, statusIcon, statusText
    };
    
    console.log('V13 calculation completed successfully:', currentCalculation);
    return { success: true, blocked: false };
}

// V13 FIXED: Display Alternatives with dynamic affordability-based recommendations
function displayAlternatives() {
    console.log('V13: Displaying alternatives with dynamic affordability-based recommendations');
    
    const calc = currentCalculation;
    if (!calc) {
        console.log('V13: No calculation data for alternatives');
        return;
    }

    // V13 RESTORED: Get affordable cars using restored function
    const affordableCars = getAffordableCars(calc);
    console.log('V13: Affordable cars found:', affordableCars.length);

    // V13 FIXED: Ensure elements exist and unhide if hidden
    const alternativesSection = safeGetElement('alternativesSection');
    const alternativesGrid = safeGetElement('alternativesGrid');
    const alternativesIntro = safeGetElement('alternativesIntro');

    if (!alternativesSection || !alternativesGrid) {
        console.error('V13: Alternatives elements not found');
        return;
    }

    // V13: Check if we should show alternatives
    const shouldShowAlternatives = calc.affordabilityIndex > 35 || !calc.canAffordDownPayment || affordableCars.length > 0;

    if (!shouldShowAlternatives && affordableCars.length === 0) {
        hideElement('alternativesSection');
        console.log('V13: No alternatives needed - car is affordable and no alternatives found');
        return;
    }

    // V13 FIXED: Show guidance message if no cars qualify
    if (affordableCars.length === 0) {
        if (alternativesIntro) {
            alternativesIntro.innerHTML = `
                <h4>🔍 No Alternative Recommendations Found</h4>
                <p>Based on your current financial profile, we couldn't find suitable alternatives that would significantly improve your financial position.</p>
                <p><strong>Suggestions:</strong></p>
                <ul style="text-align: left; display: inline-block;">
                    <li>💰 Consider increasing your savings to improve down payment options</li>
                    <li>📈 Explore increasing your income or reducing monthly expenses</li>
                    <li>📅 Consider a longer loan tenure to reduce EMI (though it increases total interest)</li>
                    <li>🔍 Look for cars under ₹${(calc.maxLoanAmount / 100000 + calc.totalSavings / 100000).toFixed(1)} lakhs</li>
                </ul>
            `;
        }
        
        alternativesGrid.innerHTML = '';
        showElement('alternativesSection'); // V13: Ensure section is shown even with guidance
        console.log('V13: Showing guidance message - no qualifying cars found');
        return;
    }

    // V13 RESTORED: Display dynamic alternatives with proper intro
    const introMessage = calc.affordabilityIndex > 60 || !calc.canAffordDownPayment ? 
        `Based on your financial safety parameters, here are ${affordableCars.length} smarter alternatives that offer better financial stability:` :
        `Here are ${affordableCars.length} alternative options that could provide even better financial safety:`;

    if (alternativesIntro) {
        alternativesIntro.innerHTML = `<p>${introMessage}</p>`;
    }

    // V13 RESTORED: Render dynamic alternatives
    const alternativesHTML = affordableCars.slice(0, 6).map(car => `
        <div class="alternative-card" onclick="selectCar('${car.name}')">
            <div class="alternative-name">${car.name}</div>
            <div class="alternative-price">₹${car.range} L</div>
            <div class="alternative-category">${car.category}</div>
            <div class="alternative-benefits">
                <div class="alternative-benefit">💰 ${car.financialBenefit}</div>
                <div class="alternative-benefit">📊 ${car.affordabilityIndex.toFixed(1)}% EMI Ratio</div>
                <div class="alternative-benefit">✅ Better Financial Safety</div>
            </div>
        </div>
    `).join('');

    alternativesGrid.innerHTML = alternativesHTML;

    // V13 FIXED: Ensure alternatives section is visible
    showElement('alternativesSection');
    console.log('V13: Dynamic alternatives displayed successfully');
}

// Display Results - V13 UPDATED with Dynamic Q&A and Restored Alternatives
function displayResults() {
    console.log('Displaying V13 results...');
    updateCarImageSection();
    updateAnalysisCards();
    updateCarDetectionUI();
    updateAffordabilityUI();
    updateVisualizationsUI();
    updateRepaymentTableUI();
    
    // V13 FIXED: Call displayAlternatives within displayResults as required
    displayAlternatives();
    
    showAllResults();
    
    // V13 NEW: Update car match status to stay synchronized with final analysis
    if (currentCalculation) {
        updateCarMatchStatus(
            currentCalculation.affordabilityStatus, 
            currentCalculation.statusIcon, 
            currentCalculation.statusText
        );
        console.log('V13: Car match status synchronized with final analysis');
        
        // V13 NEW: Update Dynamic Q&A with real calculation data
        updateQA(currentCalculation, currentCalculation.car);
        console.log('V13: Dynamic Q&A updated with personalized insights');
    }
}

function updateCarDetectionUI() {
    const calc = currentCalculation;
    if (!calc) return;
    
    setText('detectedCarName', calc.car.name);
    setText('detectedCategory', calc.car.category);
    setText('priceRange', `₹${calc.car.range} L`);
    setText('basePrice', `Base price: ₹${calc.carPriceLakhs} Lakhs`);
    
    // V13 Enhanced Combined Status Badge - synchronized with affordability analysis
    const badge = safeGetElement('combinedStatusBadge');
    if (badge) {
        badge.textContent = calc.statusText;
        badge.className = `combined-status-badge ${calc.affordabilityStatus}`;
    }
    
    showElement('detectionResults');
}

function updateAffordabilityUI() {
    const calc = currentCalculation;
    if (!calc) return;
    
    setText('disposableIncome', formatCurrency(calc.disposableIncome));
    setText('maxEmi', formatCurrency(calc.maxEMI));
    setText('availableDownPayment', formatCurrency(calc.totalSavings));
    setText('requiredDownPayment', formatCurrency(calc.requiredDownPayment));
    
    setText('affordabilityIndexValue', `${calc.affordabilityIndex.toFixed(1)}%`);
    const indexFill = safeGetElement('indexFill');
    if (indexFill) {
        indexFill.style.width = `${Math.min(calc.affordabilityIndex, 100)}%`;
    }
    
    setText('savingsBurnRate', `${calc.savingsBurnRate.toFixed(1)}%`);
    const burnFill = safeGetElement('burnFill');
    if (burnFill) {
        burnFill.style.width = `${Math.min(calc.savingsBurnRate, 100)}%`;
    }
    
    updateTrafficLights(calc.affordabilityIndex);
    showElement('affordabilitySection');
}

function updateTrafficLights(affordabilityIndex) {
    const lights = ['greenLight', 'yellowLight', 'redLight'];
    const items = ['trafficGreen', 'trafficYellow', 'trafficRed'];
    
    lights.forEach(lightId => {
        const light = safeGetElement(lightId);
        if (light) light.classList.remove('active');
    });
    
    items.forEach(itemId => {
        const item = safeGetElement(itemId);
        if (item) item.classList.remove('active');
    });
    
    if (affordabilityIndex <= 35) {
        const greenLight = safeGetElement('greenLight');
        const greenItem = safeGetElement('trafficGreen');
        if (greenLight) greenLight.classList.add('active');
        if (greenItem) greenItem.classList.add('active');
    } else if (affordabilityIndex <= 60) {
        const yellowLight = safeGetElement('yellowLight');
        const yellowItem = safeGetElement('trafficYellow');
        if (yellowLight) yellowLight.classList.add('active');
        if (yellowItem) yellowItem.classList.add('active');
    } else {
        const redLight = safeGetElement('redLight');
        const redItem = safeGetElement('trafficRed');
        if (redLight) redLight.classList.add('active');
        if (redItem) redItem.classList.add('active');
    }
}

// V13 Enhanced Visualizations (Pie chart removed)
function updateVisualizationsUI() {
    const calc = currentCalculation;
    if (!calc) return;
    
    // Update income breakdown bars (replaces pie chart)
    const remainingIncome = Math.max(0, calc.disposableIncome - calc.actualEMI);
    const totalIncome = calc.income;
    
    // Calculate percentages
    const expensesPercent = (calc.expenses / totalIncome) * 100;
    const emiPercent = (calc.actualEMI / totalIncome) * 100;
    const freePercent = (remainingIncome / totalIncome) * 100;
    
    // Update bars
    const expensesBar = safeGetElement('expensesBar');
    const emiBar = safeGetElement('emiBar');
    const freeBar = safeGetElement('freeBar');
    
    if (expensesBar) expensesBar.style.width = `${expensesPercent}%`;
    if (emiBar) emiBar.style.width = `${emiPercent}%`;
    if (freeBar) freeBar.style.width = `${freePercent}%`;
    
    // Update values
    setText('expensesValue', formatCurrency(calc.expenses));
    setText('emiValue', formatCurrency(calc.actualEMI));
    setText('freeValue', formatCurrency(remainingIncome));
    
    try {
        // Affordability Progress Chart (donut chart)
        const progressCtx = safeGetElement('affordabilityChart');
        if (progressCtx && typeof Chart !== 'undefined') {
            if (progressChart) progressChart.destroy();
            
            progressChart = new Chart(progressCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Used', 'Available'],
                    datasets: [{
                        data: [calc.affordabilityIndex, Math.max(0, 100 - calc.affordabilityIndex)],
                        backgroundColor: [
                            calc.affordabilityIndex <= 35 ? '#10B981' : 
                            calc.affordabilityIndex <= 60 ? '#F59E0B' : '#EF4444',
                            'rgba(255, 255, 255, 0.2)'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '60%',
                    plugins: { 
                        legend: { 
                            display: false 
                        } 
                    }
                }
            });
        }
    } catch (error) {
        console.error('Chart creation error:', error);
    }
    
    showElement('visualizationsSection');
}

function updateRepaymentTableUI() {
    const calc = currentCalculation;
    if (!calc) return;
    
    const tbody = safeGetElement('emiTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const tenures = [3, 5, 7];
    
    tenures.forEach(years => {
        const emi = calculateEMI(calc.actualLoanAmount, calc.interestRate, years);
        const totalAmount = emi * years * 12;
        const totalInterest = totalAmount - calc.actualLoanAmount;
        const emiRatio = calc.disposableIncome > 0 ? (emi / calc.disposableIncome) * 100 : 100;
        
        let status, statusClass;
        if (emiRatio <= 35) {
            status = '✅ Financially Safe';
            statusClass = 'status-green';
        } else if (emiRatio <= 60) {
            status = '⚠️ Budget Stretch';
            statusClass = 'status-yellow';
        } else {
            status = '❌ Not Recommended';
            statusClass = 'status-red';
        }
        
        const savingsImpact = calc.totalSavings > 0 ? 
            `${((calc.actualDownPayment / calc.totalSavings) * 100).toFixed(1)}% of savings` :
            'No savings used';
        
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${years} Years</strong></td>
            <td><strong>${formatCurrency(emi)}</strong></td>
            <td>${formatCurrency(totalInterest)}</td>
            <td>${formatCurrency(totalAmount)}</td>
            <td class="feasibility-cell ${statusClass}">${status}</td>
            <td class="savings-impact">${savingsImpact}</td>
        `;
    });
    
    showElement('repaymentSection');
}

// Helper Functions
function hideAllResults() {
    ['expenseEstimation', 'detectionResults', 'affordabilitySection', 'visualizationsSection', 
     'repaymentSection', 'alternativesSection', 'explainerSection', 'analysisRow'].forEach(hideElement);
}

function showAllResults() {
    showElement('detectionResults');
    showElement('affordabilitySection');
    showElement('repaymentSection');
    showElement('explainerSection');
}

function showError(message) {
    setText('errorText', message);
    showElement('errorMessage');
    setTimeout(() => hideElement('errorMessage'), 5000);
}

function hideError() {
    hideElement('errorMessage');
}

// V13 NEW: Q&A Button Event Handlers
function setupQAEventListeners() {
    console.log('Setting up V13 Q&A event listeners...');
    
    const questionBtns = document.querySelectorAll('.question-btn');
    questionBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const question = this.getAttribute('data-question');
            console.log('V13: Q&A button clicked:', question);
            
            // Hide all answers first
            const allAnswers = document.querySelectorAll('.qa-answer');
            allAnswers.forEach(answer => answer.classList.add('hidden'));
            
            // Show specific answer based on question
            let answerId;
            switch(question) {
                case 'why-cant-afford':
                    answerId = 'whyCantAffordAnswer';
                    break;
                case 'how-much-save':
                    answerId = 'howMuchSaveAnswer';
                    break;
                case 'what-salary':
                    answerId = 'whatSalaryAnswer';
                    break;
                case 'max-price':
                    answerId = 'maxAffordablePriceAnswer';
                    break;
            }
            
            if (answerId) {
                const answerElement = safeGetElement(answerId);
                if (answerElement) {
                    answerElement.classList.remove('hidden');
                    // Scroll to answer
                    setTimeout(() => {
                        answerElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                    console.log('V13: Showing dynamic answer for:', question);
                }
            }
            
            // Update button states
            questionBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    console.log('V13: Q&A event listeners setup completed');
}

// FIXED Event Listeners Setup - V13 UPDATED AND FIXED
function setupEventListeners() {
    console.log('Setting up V13 event listeners...');
    
    try {
        // Calculate button - FIXED
        const calculateBtn = safeGetElement('calculateBtn');
        if (calculateBtn) {
            calculateBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Calculate button clicked');
                performCalculation();
            });
            console.log('Calculate button listener added');
        } else {
            console.error('Calculate button not found!');
        }
        
        // FIXED: Lifestyle selection - Use standard approach without problematic styling
        const lifestyleSelect = safeGetElement('lifestyleCategory');
        if (lifestyleSelect) {
            lifestyleSelect.addEventListener('change', function(e) {
                console.log('Lifestyle changed to:', e.target.value);
                updateExpenseEstimation();
            });
            console.log('Lifestyle select listeners added and fixed');
        } else {
            console.error('Lifestyle select not found!');
        }
        
        // Income input
        const incomeInput = safeGetElement('monthlyIncome');
        if (incomeInput) {
            incomeInput.addEventListener('input', function() {
                console.log('Income changed to:', this.value);
                updateExpenseEstimation();
            });
            console.log('Income input listener added');
        }
        
        // Savings input
        const savingsInput = safeGetElement('totalSavings');
        if (savingsInput) {
            savingsInput.addEventListener('input', function() {
                // Fix scientific notation display issue
                let value = this.value;
                if (value.includes('e')) {
                    value = parseFloat(value).toString();
                    this.value = value;
                }
                console.log('Savings changed to:', this.value);
                const carInput = safeGetElement('carName');
                if (carInput && carInput.value) {
                    performRealTimeValidation(carInput.value);
                }
            });
            console.log('Savings input listener added');
        }
        
        // Expense editing
        const expensesInput = safeGetElement('monthlyExpenses');
        const editBtn = safeGetElement('editExpensesBtn');
        if (expensesInput) {
            if (editBtn) {
                editBtn.addEventListener('click', function() {
                    expensesInput.readOnly = false;
                    expensesInput.focus();
                });
            }
            expensesInput.addEventListener('blur', function() {
                this.readOnly = true;
                // Trigger real-time validation
                const carInput = safeGetElement('carName');
                if (carInput && carInput.value) {
                    performRealTimeValidation(carInput.value);
                }
            });
            console.log('Expenses input listeners added');
        }
        
        // Car name input with real-time validation
        const carNameInput = safeGetElement('carName');
        if (carNameInput) {
            let searchTimeout;
            carNameInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                const query = this.value;
                
                console.log('Car name input changed:', query);
                
                if (query.length < 2) {
                    hideElement('suggestionsDropdown');
                    hideElement('carMatchStatus');
                    return;
                }
                
                searchTimeout = setTimeout(() => {
                    const suggestions = searchCars(query);
                    showSuggestions(suggestions);
                    // V13 Real-time validation with synchronized status
                    performRealTimeValidation(query);
                }, 300);
            });
            console.log('V13 Car name input listener with synchronized real-time validation added');
        }
        
        // Hide suggestions on outside click
        document.addEventListener('click', function(e) {
            const carInput = safeGetElement('carName');
            const dropdown = safeGetElement('suggestionsDropdown');
            if (carInput && dropdown && 
                !carInput.contains(e.target) && !dropdown.contains(e.target)) {
                hideElement('suggestionsDropdown');
            }
        });
        
        // V13 NEW: Setup Q&A Event Listeners
        setupQAEventListeners();
        
        console.log('All V13 event listeners set up successfully');
        
    } catch (error) {
        console.error('Error setting up event listeners:', error);
    }
}

// Initialize Planner UI - V13 UPDATED
function initPlannerUI() {
    console.log('Initializing AI8Digital Auto Loan Planner V13 UI...');
    
    try {
        hideAllResults();
        hideElement('errorMessage');
        hideElement('resultsContainer');
        hideElement('analysisRow');
        hideElement('blockingMessageContainer');
        hideElement('carMatchStatus');
        
        // V13 NEW: Hide all Q&A answers initially
        const allAnswers = document.querySelectorAll('.qa-answer');
        allAnswers.forEach(answer => answer.classList.add('hidden'));
        
        // V13 FIXED: Ensure alternatives elements exist
        elements.alternativesCard = safeGetElement('alternativesSection');
        elements.alternativesGrid = safeGetElement('alternativesGrid');
        
        if (elements.alternativesCard) {
            elements.alternativesCard.classList.add('hidden');
            console.log('V13: Alternatives card element cached and hidden');
        }
        
        // Set initial state
        const expensesInput = safeGetElement('monthlyExpenses');
        if (expensesInput) {
            expensesInput.readOnly = true;
        }
        
        // Ensure we start in initial layout
        const mainContainer = safeGetElement('mainContainer');
        if (mainContainer) {
            mainContainer.classList.remove('layout-calculated');
            mainContainer.classList.add('layout-initial');
        }
        
        // Show initial headings, hide sidebar heading
        const mainHeadings = safeGetElement('mainHeadings');
        const sidebarHeading = safeGetElement('sidebarHeading');
        if (mainHeadings) mainHeadings.classList.remove('hidden');
        if (sidebarHeading) sidebarHeading.classList.add('hidden');
        
        // Reset state
        isLayoutTransitioned = false;
        currentCalculation = null;
        realTimeValidation = null;
        
        // Setup event listeners
        setupEventListeners();
        
        console.log('V13 UI with Dynamic Q&A System and Restored Dynamic Recommendations initialized successfully!');
        
    } catch (error) {
        console.error('Error initializing V13 UI:', error);
    }
}

// Global functions for HTML onclick
window.selectCar = selectCar;
window.performCalculation = performCalculation;
window.hideError = hideError;
window.initPlannerUI = initPlannerUI;

// Start app
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing V13 app...');
    initPlannerUI();
});

// Fallback initialization
if (document.readyState !== 'loading') {
    console.log('DOM already loaded, initializing V13 app immediately...');
    initPlannerUI();
}

console.log('AI8Digital Auto Loan Planner V13 - Enhanced Financial Validation System with Dynamic Q&A and Restored Dynamic Recommendations loaded successfully!');