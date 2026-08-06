const MAPA_SRC = "https://www.google.com/maps/d/embed?mid=1_Ie1DhBEpkF0XVd1q_jtjbVYEM82Hz0";

export default function MapaUnidades() {
  return (
    <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
      <iframe
        src={MAPA_SRC}
        title="Mapa das unidades Park Plus"
        className="w-full h-[280px] sm:h-[340px] md:h-[400px]"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}