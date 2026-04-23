export function Catering() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Services</span>
            <h1 className="text-6xl font-serif mb-8 tracking-tight">Catering Excellence</h1>
            <p className="text-charcoal/70 leading-relaxed mb-10 font-sans text-lg">
              Bring the signature taste of Charcoal & Oak to your private residence, corporate office, or event venue. Our dedicated catering team ensures every detail of your off-site event is executed with the same precision and flair as our in-house service.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="h-1 bg-gold w-12 mt-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-charcoal">Corporate Events</h4>
                  <p className="text-sm text-charcoal/60">Impress clients and teams with power lunches or elegant evening receptions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-1 bg-gold w-12 mt-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-charcoal">Private Home Dining</h4>
                  <p className="text-sm text-charcoal/60">An intimate fine dining experience in the comfort of your own home, complete with chef and service staff.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-1 bg-gold w-12 mt-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-charcoal">Wedding Catering</h4>
                  <p className="text-sm text-charcoal/60">Tailored menus for your special day, from rehearsal dinners to grand receptions.</p>
                </div>
              </div>
            </div>

            <button className="bg-charcoal text-white px-10 py-5 font-bold tracking-widest text-xs hover:bg-gold hover:text-charcoal transition-all">
              REQUEST CATERING PROPOSAL
            </button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1000" 
              alt="Catering Setup" 
              className="w-full h-auto shadow-2xl skew-y-1"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
