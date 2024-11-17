export default function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-3 text-center">
      DONATELLO&copy;{yearNow}
    </footer>
  );
}
