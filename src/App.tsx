import { motion } from "framer-motion";
import "./index.css";

function App() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-blue-600"
      >
        🎉 Hello from Tailwind + Motion + React!
      </motion.div> 
    </main>
    
  );
}

export default App;
