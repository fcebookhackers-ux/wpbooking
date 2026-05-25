import { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Scissors, 
  Settings, 
  Bell, 
  CheckCircle2, 
  Clock, 
  User, 
  Plus,
  MoreVertical,
  Check,
  X
} from 'lucide-react';

interface Booking {
  id: number;
  customer: string;
  service: string;
  time: string;
  status: 'Confirmed' | 'Pending';
  price: string;
}

export default function PluginMockup() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'calendar'>('bookings');
  
  const [bookings, setBookings] = useState<Booking[]>([
    { id: 1, customer: 'Dr. Roberto Costa', service: 'Consulta Preventiva', time: '09:00 - 09:45', status: 'Confirmed', price: 'R$ 180' },
    { id: 2, customer: 'Ana Clara Silva', service: 'Massagem Relaxante', time: '10:30 - 11:30', status: 'Confirmed', price: 'R$ 150' },
    { id: 3, customer: 'Bruno Henrique', service: 'Corte Degradê & Barba', time: '13:00 - 14:00', status: 'Pending', price: 'R$ 85' },
    { id: 4, customer: 'Mariana Santos', service: 'Sessão Personal Trainer', time: '15:15 - 16:15', status: 'Confirmed', price: 'R$ 120' },
    { id: 5, customer: 'Juliana Pires', service: 'Drenagem Linfática', time: '17:00 - 18:00', status: 'Pending', price: 'R$ 140' },
  ]);

  const handleApprove = (id: number) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'Confirmed' as const } : b));
  };

  const handleDecline = (id: number) => {
    setBookings(prev => prev.filter(b => b.id !== id));
  };

  // Static calendar representation
  const activeDays = [12, 13, 14, 18, 19, 20, 25, 26, 27];
  const selectedDay = 18;

  const monthWeeks = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  return (
    <div id="plugin-mockup" className="w-full rounded-2xl shadow-2xl overflow-hidden border border-border bg-white flex flex-col md:flex-row h-[480px]">
      
      {/* WP Admin Sidebar */}
      <div className="w-full md:w-56 bg-slate-800 text-slate-300 flex flex-col justify-between p-4 shrink-0 border-b md:border-b-0 md:border-r border-slate-700">
        <div>
          {/* WordPress Logo Mock */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-700/50">
            <div className="w-7 h-7 rounded-full bg-slate-600 flex items-center justify-center font-bold text-white text-xs">
              W
            </div>
            <div>
              <p className="text-xs font-semibold text-white leading-none">WordPress Panel</p>
              <p className="text-[10px] text-slate-400">v6.4.2</p>
            </div>
          </div>

          {/* Sidebar Menu Items */}
          <nav className="space-y-1.5">
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg transition-colors text-slate-400 hover:bg-slate-700 hover:text-white">
              <LayoutDashboard size={14} />
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors font-medium ${
                activeTab === 'bookings' 
                  ? 'bg-primary text-white font-semibold' 
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Calendar size={14} />
                <span>Reservas</span>
              </div>
              <span className="bg-cta text-ink text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {bookings.filter(b => b.status === 'Pending').length}
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('calendar')}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg transition-colors ${
                activeTab === 'calendar' 
                  ? 'bg-primary text-white font-semibold' 
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Calendar size={14} />
              <span>Visualizar Agenda</span>
            </button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg transition-colors text-slate-300 hover:bg-slate-700 hover:text-white">
              <Scissors size={14} />
              <span>Serviços & Equipe</span>
            </button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg transition-colors text-slate-300 hover:bg-slate-700 hover:text-white">
              <Settings size={14} />
              <span>Configurações</span>
            </button>
          </nav>
        </div>

        {/* Plugin Version Footer */}
        <div className="hidden md:block pt-4 border-t border-slate-700/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-[10px] text-slate-400 font-medium">WP Booking v2.4.0</p>
          </div>
          <p className="text-[9px] text-slate-500 mt-0.5">Sincronizado com Google Calendar</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-slate-55 p-5 overflow-hidden">
        {/* Header inside Mockup */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div>
            <h4 id="mockup-header-title" className="text-sm font-bold text-slate-800">
              {activeTab === 'bookings' ? 'Fila de Reserva Ativas' : 'Grade de Horários Interativa'}
            </h4>
            <p className="text-[10px] text-slate-500">
              Gerencie suas solicitações recebidas em tempo real
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button id="noti-btn" className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors relative">
                <Bell size={15} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white font-bold text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
            <button id="add-booking-btn" className="flex items-center gap-1 bg-primary text-white rounded-lg px-2.5 py-1.5 text-xs font-semibold hover:bg-blue-600 transition-colors shadow-sm">
              <Plus size={12} />
              <span>Criar Agendamento</span>
            </button>
          </div>
        </div>

        {/* Tab content */}
        {activeTab === 'bookings' ? (
          <div id="bookings-panel" className="flex-1 overflow-y-auto pr-1 space-y-2">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div key={booking.id} className="p-3 bg-slate-50 hover:bg-slate-100/80 border border-slate-250 rounded-xl flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
                      <User size={14} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-xs font-bold text-slate-900 leading-tight">{booking.customer}</h5>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                          booking.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {booking.status === 'Confirmed' ? 'Confirmado' : 'Pendente'}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-slate-500 mt-0.5">
                        <span className="font-medium text-slate-600">{booking.service}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} className="text-slate-400" />
                          {booking.time}
                        </span>
                        <span className="font-semibold text-slate-700">{booking.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {booking.status === 'Pending' ? (
                      <>
                        <button 
                          onClick={() => handleApprove(booking.id)}
                          title="Aprovar Agendamento" 
                          className="p-1 h-7 w-7 rounded-lg text-green-600 bg-green-50 hover:bg-green-100 transition-colors flex items-center justify-center"
                        >
                          <Check size={14} className="stroke-[3]" />
                        </button>
                        <button 
                          onClick={() => handleDecline(booking.id)}
                          title="Recusar" 
                          className="p-1 h-7 w-7 rounded-lg text-red-650 bg-red-50 hover:bg-red-100 transition-colors flex items-center justify-center"
                        >
                          <X size={14} className="stroke-[3]" />
                        </button>
                      </>
                    ) : (
                      <span className="text-[10px] text-green-600 flex items-center gap-1 font-semibold pr-2">
                        <CheckCircle2 size={12} />
                        Auto-aprovado
                      </span>
                    )}
                    <button id={`action-btn-${booking.id}`} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 py-12">
                <CheckCircle2 size={32} className="text-slate-300 mb-2" />
                <p className="text-xs font-semibold">Nenhum agendamento pendente</p>
                <p className="text-[10px] text-slate-400">Tudo limpo por aqui!</p>
              </div>
            )}
          </div>
        ) : (
          <div id="calendar-panel" className="flex-1 flex flex-col lg:flex-row gap-4">
            
            {/* Calendar grid */}
            <div className="flex-1 bg-slate-50 rounded-xl p-3 border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800">Maio 2026</span>
                <div className="flex gap-1">
                  <button id="prev-month" className="p-1 rounded bg-white hover:bg-slate-150 border border-slate-200 text-slate-600">
                    <Clock size={10} className="rotate-180" />
                  </button>
                  <button id="next-month" className="p-1 rounded bg-white hover:bg-slate-150 border border-slate-200 text-slate-600">
                    <Clock size={10} />
                  </button>
                </div>
              </div>
              
              {/* Days label */}
              <div className="grid grid-cols-7 text-center text-[9px] font-bold text-slate-400 mb-1">
                <span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
              </div>
              
              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {monthWeeks.flat().map((day, idx) => {
                  if (day === null) {
                    return <div key={`empty-${idx}`} className="h-6"></div>;
                  }
                  
                  const isActive = activeDays.includes(day);
                  const isSelected = day === selectedDay;
                  
                  return (
                    <button
                      key={`day-${day}`}
                      className={`h-6 text-[10px] font-semibold rounded-md flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-primary text-white' 
                          : isActive 
                            ? 'bg-blue-50 text-blue-750 font-bold hover:bg-blue-100' 
                            : 'text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected day timeline summary */}
            <div className="w-full lg:w-44 bg-blue-50/50 rounded-xl p-3 border border-blue-50 flex flex-col justify-between">
              <div>
                <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wide">Dia Selecionado</p>
                <p className="text-xs font-extrabold text-slate-800 mt-0.5">Segunda, 18 de Maio</p>
                
                <div className="mt-3 space-y-2">
                  <div className="pl-2 border-l-2 border-primary py-0.5">
                    <p className="text-[9px] text-slate-500 leading-none">09:00 - 09:45</p>
                    <p className="text-[10px] font-bold text-slate-700 leading-tight">Consulta Roberto C.</p>
                  </div>
                  <div className="pl-2 border-l-2 border-slate-300 py-0.5">
                    <p className="text-[9px] text-slate-500 leading-none">11:00 - 12:00</p>
                    <p className="text-[10px] font-bold text-slate-400 line-through leading-tight font-medium">Intervalo Almoço</p>
                  </div>
                  <div className="pl-2 border-l-2 border-primary py-0.5">
                    <p className="text-[9px] text-slate-500 leading-none">13:00 - 14:00</p>
                    <p className="text-[10px] font-bold text-slate-700 leading-tight">Corte Bruno H.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-2 border-t border-blue-100 text-[9px] text-blue-700 font-medium">
                ✓ 3 reservas ativas p/ o dia
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
