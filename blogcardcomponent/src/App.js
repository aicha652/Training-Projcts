import './App.css';
import BlogCard from "./BlogCard"

function App() {
  return (
    <div>
      <BlogCard 
               subject="TECHNOLOGY"
               title="How I Built Web Development Challenges Website"
               text="if you're looking for inspiration to build your own side project..."
               fullname="Corey Lubin"
               hour="4 h ago" />
    </div>
  );
}

export default App;
