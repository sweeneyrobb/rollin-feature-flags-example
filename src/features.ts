import { createFeatures } from 'rollin-feature-flags'

export const {
    FeatureFlagProvider,
    Filter,
    featureFlags,
    useFlag,
    useFlags,
    useSetFlags,
} = createFeatures([
    'rollin-feature-flags-example.area.feature1',
    'rollin-feature-flags-example.area.feature2',
    'rollin-feature-flags-example.area.feature3',
])
