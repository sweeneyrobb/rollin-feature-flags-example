import React, { Component } from 'react'
import { FeatureFlagConsumer } from './features'

export class ClassComponentExample extends Component {
    render = () => (
        <FeatureFlagConsumer>
            {({ flags }) => (
                <>
                    <h3>Class Component example</h3>
                    <div>
                        <span>Your feature is </span>
                        <span>
                            {
                                flags[
                                    'rollin-feature-flags-example.area.feature1'
                                ] ? 'On' : 'Off'
                            }
                        </span>
                    </div>
                </>
            )}
        </FeatureFlagConsumer>
    )
}
