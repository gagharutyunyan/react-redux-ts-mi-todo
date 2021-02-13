import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootSTate } from '../store/reducers/index';

export const useTypedSelector: TypedUseSelectorHook<RootSTate> = useSelector;
