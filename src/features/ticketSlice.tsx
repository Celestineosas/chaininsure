import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Ticket {
  id: string;
  eventName: string;
  amount: number;
  startDate: string;
  endDate: string;
}

interface TicketState {
  activeTickets: Ticket[];
  expiredTickets: Ticket[];
}

const initialState: TicketState = {
  activeTickets: [],
  expiredTickets: []
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<Omit<Ticket, "id">>) => {
      state.activeTickets.push({ ...action.payload, id: uuidv4() });
    },
    expireTicket: (state, action: PayloadAction<string>) => {
      const ticket = state.activeTickets.find(item => item.id === action.payload);
      if (ticket) {
        state.activeTickets = state.activeTickets.filter(item => item.id !== ticket.id);
        state.expiredTickets.push(ticket);
      }
    }
  }
});

export const { addTicket, expireTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
