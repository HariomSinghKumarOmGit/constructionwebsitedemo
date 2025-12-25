import { useState } from 'react';
import { Check } from 'lucide-react';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = Array.from({ length: 14 }, (_, i) => i + 15); // Fake dates
  const times = ['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  return (
    <section id="contact" className="py-24 bg-primary-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div className="space-y-8">
          <span className="text-accent-gold uppercase tracking-widest text-xs font-semibold">Consultation</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark-900 leading-tight">
            Begin Your <br /> Masterpiece
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Schedule a private consultation with our principal architects. We recommend booking at least two weeks in advance for new project inquiries.
          </p>

          <div className="bg-primary-off p-8 border border-gray-100">
            <h3 className="font-serif text-xl mb-6">Development Office</h3>
            <p className="text-gray-500 mb-2">44 Gold Coast Towers, Penthouse B</p>
            <p className="text-gray-500">New York, NY 10012</p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-dark-800">Direct Line</p>
              <p className="text-xl font-serif text-accent-gold mt-1">+1 (555) 789-0123</p>
            </div>
          </div>
        </div>

        {/* Booking Interface */}
        <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-10 relative">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Select Date (October)</label>
              <div className="grid grid-cols-7 gap-2">
                {dates.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDate(d)}
                    className={`aspect-square flex flex-col items-center justify-center text-sm rounded-sm transition-all duration-300
                         ${selectedDate === d
                        ? 'bg-accent-gold text-white shadow-lg scale-105'
                        : 'bg-primary-off text-dark-800 hover:bg-gray-100'
                      }`}
                  >
                    <span className="text-xs opacity-50">OCT</span>
                    <span className="font-serif text-lg">{d}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Preferred Time</label>
              <div className="grid grid-cols-2 gap-4">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-4 px-6 border text-sm font-medium transition-all duration-300 flex justify-between items-center
                          ${selectedTime === t
                        ? 'border-accent-gold bg-accent-gold/5 text-accent-gold'
                        : 'border-gray-200 text-gray-500 hover:border-gray-300'
                      }`}
                  >
                    {t}
                    {selectedTime === t && <Check size={16} />}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-dark-900 text-white py-4 font-medium uppercase tracking-widest hover:bg-accent-gold transition-colors duration-500 mt-4">
              Confirm Appointment
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Booking;
