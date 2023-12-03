import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  Token: string | null;
  StudentID: string;
  StudentName: string;
  StudentEmail: string;
  StudentPassword: string;
  PasswordSalt: string;
  StudentProgram: string;
  StudentPoints: number;
  IsSuperUser: boolean;
}

const initialState: AuthState = {
  Token: null,
  StudentID: '',
  StudentName: '',
  StudentEmail: '',
  StudentPassword: '',
  PasswordSalt: '',
  StudentProgram: '',
  StudentPoints: 0,
  IsSuperUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<AuthState>) => {
      state.Token = action.payload.Token;
      state.StudentID = action.payload.StudentID;
      state.StudentName = action.payload.StudentName;
      state.StudentEmail = action.payload.StudentEmail;
      state.StudentPassword = action.payload.StudentPassword;
      state.PasswordSalt = action.payload.PasswordSalt;
      state.StudentProgram = action.payload.StudentProgram;
      state.StudentPoints = action.payload.StudentPoints;
      state.IsSuperUser = action.payload.IsSuperUser;
    },
    setUserPoints: (state, action: PayloadAction<number>) => {
      state.StudentPoints = action.payload;
    },
    clearUserData: () => {
      return initialState;
    },
  },
});

export const {setUserData, clearUserData, setUserPoints} = authSlice.actions;
export default authSlice.reducer;
