export function formatMoney({
    cents,
}: {
    cents: number;
}) {
    return (cents / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}
