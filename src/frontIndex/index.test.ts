import { GetIDFrontIndex } from ".";

test('GetIDFrontIndex', () => {
    const testValues = [
        { value: 'uWacG42Gb5', expect: 80 },
        { value: 'dhfgXz7bdM', expect: 63 },
        { value: 'eWZfSUPtB6', expect: 64 },
        { value: 'a9u3nQptfW', expect: 60 },
        { value: 'gmKVxUN5ff', expect: 66 },
        { value: 'AQSBEJpwdk', expect: 20 },
        { value: 'RAHwNwUYNt', expect: 37 },
        { value: 'ELwgZ9JyXU', expect: 24 },
        { value: 'ZQpL6Mn2UA', expect: 45 },
        { value: 'F8jFttxFDT', expect: 25 },
        { value: '5mQCrF42PA', expect: 5 },
        { value: '8SaZAMhs7a', expect: 8 },
        { value: '0Die4zMbJP', expect: 0 },
        { value: '2UkWCKWyDN', expect: 2 },
        { value: '1RkntXHa9d', expect: 1 },
    ];
    testValues.forEach(i => {
        expect(GetIDFrontIndex(i.value)).toBe(i.expect);
    });
});
