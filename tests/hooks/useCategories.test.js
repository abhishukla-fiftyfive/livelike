import { act, renderHook } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useCategories } from '../../src/hooks/useCategories'

global.fetch = vi.fn()

describe('useCategories hooks testing', () => {
    it('should return initial state properly', () => {
        const { result } = renderHook(() => useCategories());
        expect(result.current.isLoadingCategories).toBeFalsy();
        expect(result.current.categories).toStrictEqual([]);
        expect(result.current.categoriesErorr).toStrictEqual({});
        expect(result.current.handleFetchCategories).toBeDefined();
    });
    it('should call successfully when calling handleFetchCategories in case of success', async () => {
        const response = [{ title: 'Working' }]
        fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(response) })
        const { result } = renderHook(() => useCategories());
        await act(async () => {
            await result.current.handleFetchCategories();
        });
        expect(result.current.categories).toStrictEqual(response);
        expect(result.current.isLoadingCategories).toBeFalsy();
    });
    it('should call error when calling handleFetchCategories in case of error', async () => {
        const response = {msg: 'Error'}
        fetch.mockRejectedValue(response)
        const { result } = renderHook(() => useCategories());
        await act(async () => {
            await result.current.handleFetchCategories();
        });
        expect(result.current.categoriesErorr).toStrictEqual(response);
        expect(result.current.isLoadingCategories).toBeFalsy();
    });
})