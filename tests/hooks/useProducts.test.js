import { act, renderHook } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useProducts } from '../../src/hooks/useProducts'

global.fetch = vi.fn()

describe('useProducts hooks testing', () => {
    it('should return initial state properly', () => {
        const { result } = renderHook(() => useProducts());
        expect(result.current.isLoadingProducts).toBeFalsy();
        expect(result.current.products).toStrictEqual([]);
        expect(result.current.productsErorr).toStrictEqual({});
        expect(result.current.handleFetchProducts).toBeDefined();
    });
    it('should call successfully when calling handleFetchProducts in case of success', async () => {
        const response = [{ title: 'Working' }]
        fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(response) })
        const { result } = renderHook(() => useProducts());
        await act(async () => {
            await result.current.handleFetchProducts();
        });
        expect(result.current.products).toStrictEqual(response);
        expect(result.current.isLoadingProducts).toBeFalsy();
    });
    it('should call successfully when calling handleFetchProducts in case of success when category is available', async () => {
        const response = [{ title: 'Working' }]
        fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(response) })
        const { result } = renderHook(() => useProducts());
        await act(async () => {
            await result.current.handleFetchProducts('test');
        });
        expect(result.current.products).toStrictEqual(response);
        expect(result.current.isLoadingProducts).toBeFalsy();
    });
    it('should call error when calling handleFetchProducts in case of error', async () => {
        const response = {msg: 'Error'}
        fetch.mockRejectedValue(response)
        const { result } = renderHook(() => useProducts());
        await act(async () => {
            await result.current.handleFetchProducts();
        });
        expect(result.current.productsErorr).toStrictEqual(response);
        expect(result.current.isLoadingProducts).toBeFalsy();
    });
})