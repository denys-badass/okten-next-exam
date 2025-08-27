'use client'

import {createListCollection, Portal, Select} from "@chakra-ui/react";
import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export const SortBar = () => {
    const searchParams = useSearchParams();
    const sortValue = searchParams.get('sort_by') || 'popularity.desc';
    const [value, setValue] = useState<string[]>([sortValue]);
    const router = useRouter();

    return (
        <>
            <Select.Root
                collection={sorters}
                minW='200px'
                value={value}
                onValueChange={(e) => setValue(e.value)}
                onSelect={(e) => router.push('/movies?sort_by=' + e.value)}>
                <Select.HiddenSelect/>
                <Select.Label>Sort by:</Select.Label>
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder='Select a sort option' />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator/>
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {sorters.items.map((sort) => (
                                <Select.Item item={sort} key={sort.value}>
                                    {sort.label}
                                    <Select.ItemIndicator/>
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>
        </>
    );
};

const sorters = createListCollection({
    items: [
        {label: 'Popularity ↓', value: 'popularity.desc', id: 'popularity.desc'},
        {label: 'Popularity ↑', value: 'popularity.asc', id: 'popularity.asc'},
        {label: 'Title ↓', value: 'title.desc', id: 'title.desc'},
        {label: 'Title ↑', value: 'title.asc', id: 'title.asc'},
        {label: 'Release Date ↓', value: 'primary_release_date.desc', id: 'primary_release_date.desc'},
        {label: 'Release Date ↑', value: 'primary_release_date.asc' , id: 'primary_release_date.asc'},
        {label: 'Rating ↓', value: 'vote_average.desc', id: 'vote_average.desc'},
        {label: 'Rating ↑', value: 'vote_average.asc', id: 'vote_average.asc'},
        {label: 'Review ↓', value: 'vote_count.desc', id: 'vote_count.desc'},
        {label: 'Review ↑', value: 'vote_count.asc', id: 'vote_count.asc'},
    ]
})