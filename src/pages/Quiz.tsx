import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const questions = [
  {
    id: 1,
    question: "It's 10 PM on a Friday. Where are you?",
    options: [
      { text: "At a dimly lit cocktail bar, making eye contact across the room.", mood: "Late Night Energy" },
      { text: "In bed with a book, phone on Do Not Disturb.", mood: "Cold & Untouchable" },
      { text: "Getting ready. The night hasn't even started yet.", mood: "Sweet but Toxic" },
      { text: "At an exclusive event, wearing something that turns heads.", mood: "Soft & Dangerous" }
    ]
  },
  {
    id: 2,
    question: "How do you want people to describe you?",
    options: [
      { text: "Intimidating but fascinating.", mood: "Cold & Untouchable" },
      { text: "Sweet, until I'm not.", mood: "Sweet but Toxic" },
      { text: "Magnetic and impossible to ignore.", mood: "Late Night Energy" },
      { text: "Elegant but slightly dangerous.", mood: "Soft & Dangerous" }
    ]
  },
  {
    id: 3,
    question: "Pick your aesthetic:",
    options: [
      { text: "Leather jackets, smudged eyeliner, dark cherry lips.", mood: "Soft & Dangerous" },
      { text: "Silk slip dresses, messy hair, bare skin.", mood: "Late Night Energy" },
      { text: "Oversized blazers, sleek bun, minimal makeup.", mood: "Cold & Untouchable" },
      { text: "Corsets, lip gloss, platform boots.", mood: "Sweet but Toxic" }
    ]
  },
  {
    id: 4,
    question: "What's your toxic trait?",
    options: [
      { text: "Leaving people on read for days.", mood: "Cold & Untouchable" },
      { text: "Falling in love with the idea of someone.", mood: "Sweet but Toxic" },
      { text: "Starting arguments just to feel something.", mood: "Late Night Energy" },
      { text: "Knowing exactly how to manipulate a situation.", mood: "Soft & Dangerous" }
    ]
  },
  {
    id: 5,
    question: "Choose a scent note that calls to you:",
    options: [
      { text: "Dark Vanilla & Black Cherry", mood: "Soft & Dangerous" },
      { text: "Espresso & Skin Musk", mood: "Late Night Energy" },
      { text: "Spun Sugar & Patchouli", mood: "Sweet but Toxic" },
      { text: "Iris & White Tea", mood: "Cold & Untouchable" }
    ]
  }
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<typeof products[0] | null>(null);

  const handleAnswer = (mood: string) => {
    const newAnswers = [...answers, mood];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    // Count occurrences of each mood
    const moodCounts = finalAnswers.reduce((acc, mood) => {
      acc[mood] = (acc[mood] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Find the mood with the highest count
    let topMood = "";
    let maxCount = 0;
    for (const [mood, count] of Object.entries(moodCounts)) {
      if (count > maxCount) {
        maxCount = count;
        topMood = mood;
      }
    }

    // Find a product that matches the top mood
    const matchingProducts = products.filter(p => p.mood === topMood);
    // Pick a random one from the matching mood, or just the first one
    const selectedProduct = matchingProducts[Math.floor(Math.random() * matchingProducts.length)];
    
    setResult(selectedProduct);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center bg-mg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={result.imageUrl}
            alt="Result background"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mg-black via-mg-black/80 to-mg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="uppercase tracking-widest text-sm text-mg-nude mb-4">Your Signature Scent Is</h2>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">{result.name}</h1>
          <p className="text-2xl italic text-mg-lightgray/80 mb-8">"{result.tagline}"</p>
          
          <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 p-8 mb-10 text-left">
            <h3 className="uppercase tracking-widest text-xs text-mg-lightgray/60 mb-2">The Vibe</h3>
            <p className="text-lg text-white mb-6 leading-relaxed">{result.description}</p>
            
            <h3 className="uppercase tracking-widest text-xs text-mg-lightgray/60 mb-2">Key Notes</h3>
            <p className="text-mg-lightgray mb-6">{result.notes.top} • {result.notes.heart} • {result.notes.base}</p>
            
            <div className="flex flex-wrap gap-2">
              {result.moodTags.map(tag => (
                <span key={tag} className="bg-white/5 border border-white/10 text-mg-lightgray text-[10px] uppercase tracking-widest px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/product/${result.id}`}
              className="bg-white text-mg-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-mg-nude transition-colors"
            >
              Shop {result.name}
            </Link>
            <button
              onClick={resetQuiz}
              className="border border-white/30 text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:border-white hover:bg-white/5 transition-all"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center bg-mg-black">
      <div className="max-w-3xl mx-auto w-full">
        <div className="mb-12 text-center">
          <span className="uppercase tracking-widest text-xs text-mg-lightgray/50 mb-4 block">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="w-full bg-white/10 h-1 mb-8">
            <div 
              className="bg-mg-nude h-full transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
            ></div>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight">{q.question}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {q.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.mood)}
              className="group text-left p-6 border border-white/10 bg-[#0a0a0a] hover:border-mg-nude hover:bg-white/5 transition-all duration-300 flex flex-col justify-between min-h-[120px]"
            >
              <span className="text-mg-lightgray group-hover:text-white text-lg leading-relaxed transition-colors">
                {option.text}
              </span>
              <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-mg-nude mt-4 flex items-center justify-center self-end">
                <div className="w-2 h-2 rounded-full bg-mg-nude opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
