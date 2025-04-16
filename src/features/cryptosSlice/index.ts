import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICryptoAsset {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string | null;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
}

interface CryptoState {
    cryptos: ICryptoAsset[];
    briefcase: ICryptoAsset[];
    loading: boolean;
    error: string | null;
}

const initialState: CryptoState = {
    cryptos: [],
    briefcase: [],
    loading: false,
    error: null,
};

export const cryptosSlice = createSlice({
    name: "crypto",
    initialState,
    reducers: {
        fetchCrypto: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchCryptoSuccess: (state, action: PayloadAction<ICryptoAsset[]>) => {
            state.loading = false;
            state.error = null;
            state.cryptos = action.payload;
        },
        fetchCryptoFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        setCryptosState: (state, action: PayloadAction<ICryptoAsset[]>) => {
            state.cryptos = action.payload;
        },
        fetchBriefcaseState: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchBriefcaseSuccess: (state, action: PayloadAction<ICryptoAsset[]>) => {
            state.loading = false;
            state.error = null;
            state.briefcase = action.payload;
        },
        fetchBriefcaseFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        setBriefcaseState: (state, action: PayloadAction<ICryptoAsset>) => {
            const existingBriefcase = state.briefcase.some(
                (briefcase) => briefcase.id === action.payload.id
            );
            if (!existingBriefcase) {
                state.briefcase.push(action.payload);
            }
        }
    }
});

export const {
    setCryptosState,
    fetchCrypto,
    fetchCryptoSuccess,
    fetchCryptoFailure,
    setBriefcaseState,
    fetchBriefcaseState,
    fetchBriefcaseSuccess,
    fetchBriefcaseFailure,
} = cryptosSlice.actions;

export const cryptoReducers = cryptosSlice.reducer;