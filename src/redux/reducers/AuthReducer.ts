import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  Token: string | null;
  StudentID: string;
  StudentName: string;
  StudentEmail: string;
  StudentPassword: string;
  PasswordSalt: string;
  StudentImage: Buffer | null;
  StudentPoints: number;
}

const initialState: AuthState = {
  Token: null,
  StudentID: '',
  StudentName: '',
  StudentEmail: '',
  StudentPassword: '',
  PasswordSalt: '',
  StudentImage: null,
  StudentPoints: 0,
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
      state.StudentImage = action.payload.StudentImage;
      state.StudentPoints = action.payload.StudentPoints;
    },
    clearUserData: () => {
      return initialState;
    },
  },
});

export const {setUserData, clearUserData} = authSlice.actions;
export default authSlice.reducer;
