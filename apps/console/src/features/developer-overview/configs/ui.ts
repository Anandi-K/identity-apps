/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {  FunctionComponent, SVGProps } from "react";
import { ReactComponent as AppIcon } from "../../../themes/dark/assets/images/icons/app-icon.svg";
import { ReactComponent as BuildingIcon } from "../../../themes/default/assets/images/icons/building-icon.svg";
import { ReactComponent as CodeForkIcon } from "../../../themes/default/assets/images/icons/code-fork.svg";
import BannerSprites from "../../../themes/default/assets/images/misc/banner-sprites.svg";

export const getOverviewPageImages = (): {
    jumbotron: {
        background: string;
    },
    quickLinks: {
        applications: FunctionComponent<SVGProps<SVGSVGElement>>;
        idp: FunctionComponent<SVGProps<SVGSVGElement>>;
        remoteFetch: FunctionComponent<SVGProps<SVGSVGElement>>;
    }
} => {

    return {
        jumbotron: {
            background: BannerSprites
        },
        quickLinks: {
            applications: AppIcon,
            idp: BuildingIcon,
            remoteFetch: CodeForkIcon
        }
    };
};
